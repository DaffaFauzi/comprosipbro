import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const selections = {
  // branding
  'logo_sip_bro__1_-removebg-preview-24a63e63.png': { dest: 'branding/logo-primary.png', id: 'logo-primary', category: 'branding' },
  'sip_bro_putih-removebg-preview-346c007b.png': { dest: 'branding/logo-white-lg.png', id: 'logo-white-lg', category: 'branding' },
  'cropped-upscalemedia-transformed-removebg-preview--3b0aaa5d.png': { dest: 'branding/favicon-lg.png', id: 'favicon-lg', category: 'branding' },
  'cropped-upscalemedia-transformed-removebg-preview--4ab166c8.png': { dest: 'branding/favicon-md.png', id: 'favicon-md', category: 'branding' },
  'cropped-upscalemedia-transformed-removebg-preview--76414451.png': { dest: 'branding/favicon-sm.png', id: 'favicon-sm', category: 'branding' },
  
  // hero
  '8936603-scaled-8d0aaba8.jpg': { dest: 'hero/hero-businessman.jpg', id: 'img-hero-businessman-scaled', category: 'hero' },
  
  // about
  'business-people-shaking-hands-together-scaled-11898ce2.jpg': { dest: 'about/about-shaking-hands.jpg', id: 'img-about-shaking-hands-scaled', category: 'about' },
  
  // services
  '10031780-scaled-dc3aa258.jpg': { dest: 'services/service-insurance.jpg', id: 'img-service-insurance-scaled', category: 'services' },
  '26639-scaled-3af829a7.jpg': { dest: 'services/service-consulting.jpg', id: 'img-service-consulting-scaled', category: 'services' },
  'businessman-house-insurance-scaled-732acbdb.jpg': { dest: 'services/service-property.jpg', id: 'img-service-property-scaled', category: 'services' },
  'close-up-happy-family-therapy-session-scaled-266456d2.jpg': { dest: 'services/service-family.jpg', id: 'img-service-family-scaled', category: 'services' },
  'front-view-arrangement-economy-elements-scaled-64eafe7e.jpg': { dest: 'services/service-finance.jpg', id: 'img-service-finance-scaled', category: 'services' },
  'data-analytics-tablet-scaled-3eaef8d3.jpg': { dest: 'services/service-data-analytics.jpg', id: 'img-service-data-analytics-scaled', category: 'services' }
};

// Original file lists in public/legacy
const legacyBase = 'public/legacy';
const mediaBase = 'public/media';

// Helper to calculate SHA256 hash
function getSha256(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

// 1. Copy Selected Files to public/media
console.log('--- Phase 1: Copying curated assets ---');
const copiesPerformed = [];
Object.entries(selections).forEach(([originalFilename, meta]) => {
  // Find where it is in legacy
  // It could be in public/legacy/images/ or public/legacy/icons/
  let srcPath = path.join(legacyBase, 'images', originalFilename);
  if (!fs.existsSync(srcPath)) {
    srcPath = path.join(legacyBase, 'icons', originalFilename);
  }
  if (!fs.existsSync(srcPath)) {
    srcPath = path.join(legacyBase, 'fonts', originalFilename);
  }
  
  if (!fs.existsSync(srcPath)) {
    console.error(`Source file not found: ${srcPath}`);
    return;
  }
  
  const destPath = path.join(mediaBase, meta.dest);
  
  // Ensure target folder exists
  const destDir = path.dirname(destPath);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  fs.copyFileSync(srcPath, destPath);
  console.log(`Copied: ${srcPath} -> ${destPath}`);
  copiesPerformed.push({
    src: srcPath,
    dest: destPath,
    originalName: originalFilename,
    newName: meta.dest
  });
});

// 2. Read existing media-library.json and update curated paths
console.log('\n--- Phase 2: Updating media-library.json ---');
const mediaLibraryPath = 'src/content/media-library.json';
const mediaLibrary = JSON.parse(fs.readFileSync(mediaLibraryPath, 'utf8'));

const updatedMediaLibrary = mediaLibrary.map(asset => {
  const origName = asset.originalFilename;
  const isSelected = !!selections[origName];
  
  if (isSelected) {
    const meta = selections[origName];
    return {
      ...asset,
      status: 'selected',
      currentPublicPath: `/media/${meta.dest}`
    };
  } else {
    // Determine the unselected status mapping
    let currentStatus = asset.status;
    if (currentStatus === 'selected') {
      currentStatus = 'available'; // Downgrade previously selected size variants
    }
    return {
      ...asset,
      status: currentStatus
    };
  }
});

fs.writeFileSync(mediaLibraryPath, JSON.stringify(updatedMediaLibrary, null, 2), 'utf8');
console.log(`Updated ${mediaLibraryPath}`);

// 3. Update docs/ASSET_MAPPING.md
console.log('\n--- Phase 3: Updating docs/ASSET_MAPPING.md ---');
let md = `# SIP BRO Legacy Asset Inventory & Mapping

This document provides a comprehensive inventory of all 66 assets located under \`public/legacy/\` as crawled from the legacy SIP BRO website.

## Summary

- **Total Assets**: ${updatedMediaLibrary.length}
- **Duplicates by Hash**: 0 (all 66 files have unique SHA-256 hashes)
- **Status Counts**:
  - Selected: ${updatedMediaLibrary.filter(a => a.status === 'selected').length}
  - Available (Unselected): ${updatedMediaLibrary.filter(a => a.status === 'available').length}
  - Low-Quality (Unselected): ${updatedMediaLibrary.filter(a => a.status === 'low-quality').length}
  - Technical (Unselected): ${updatedMediaLibrary.filter(a => a.status === 'technical').length}
  - Needs-Confirmation (Unselected): ${updatedMediaLibrary.filter(a => a.status === 'needs-confirmation').length}

---

## Detailed Asset Inventory

| ID | Public Path | Category | Type | Status (Selection) | Suggested Purpose | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
`;

updatedMediaLibrary.forEach(a => {
  const selectionStatus = a.status === 'selected' ? '**selected**' : `unselected (${a.status})`;
  md += `| **\`${a.id}\`** | [\`${a.currentPublicPath}\`](file:///Users/fajar.mac/Developer/APG/sipbro-compro/public${a.currentPublicPath}) | \`${a.category}\` | \`${a.fileType}\` | ${selectionStatus} | ${a.suggestedPurpose} | ${a.notes} |\n`;
});

fs.writeFileSync('docs/ASSET_MAPPING.md', md, 'utf8');
console.log('Updated docs/ASSET_MAPPING.md');

// 4. Verify original public/legacy files are unchanged
console.log('\n--- Phase 4: Verifying public/legacy integrity ---');
function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    if (file === '.DS_Store') return;
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(file));
    } else {
      results.push(file.replace(/\\/g, '/'));
    }
  });
  return results;
}

const currentLegacyFiles = walkDir(legacyBase);
console.log(`Current legacy files count: ${currentLegacyFiles.length}`);
if (currentLegacyFiles.length !== 66) {
  console.error(`ERROR: Legacy files count is different! Expected 66, found ${currentLegacyFiles.length}`);
} else {
  console.log('Legacy files count verified (exactly 66 files).');
}

// Check hashes of files copied to make sure they are identical
let allHashesMatch = true;
copiesPerformed.forEach(copy => {
  const srcHash = getSha256(copy.src);
  const destHash = getSha256(copy.dest);
  if (srcHash !== destHash) {
    console.error(`ERROR: Hash mismatch for ${copy.originalName}!`);
    allHashesMatch = false;
  }
});
if (allHashesMatch) {
  console.log('All copied file hashes verified matches with original files.');
}
console.log('Verification finished.');
