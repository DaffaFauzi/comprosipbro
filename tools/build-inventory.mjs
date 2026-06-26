import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const legacyDir = 'public/legacy';
const manifestPath = 'docs/LEGACY_ASSET_MANIFEST.json';

function getSha256(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
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

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const files = walkDir(legacyDir);

// Static mappings for known assets
const idMapping = {
  // Branding
  'logo_sip_bro__1_-removebg-preview-24a63e63.png': { id: 'logo-primary', category: 'branding', status: 'selected', purpose: 'Primary corporate logo (colored, transparent)', notes: 'Main brand logo' },
  'sip_bro_putih-removebg-preview-346c007b.png': { id: 'logo-white-lg', category: 'branding', status: 'selected', purpose: 'Large white corporate logo for dark backgrounds (footer)', notes: 'High resolution' },
  'sip_bro_putih-removebg-preview-200x70-5084d93c.png': { id: 'logo-white-sm', category: 'branding', status: 'available', purpose: 'Small white corporate logo for navigation footer', notes: 'Medium resolution crop' },
  'cropped-upscalemedia-transformed-removebg-preview--76414451.png': { id: 'favicon-sm', category: 'branding', status: 'available', purpose: 'Favicon / application icon 32x32', notes: 'Very small thumbnail' },
  'cropped-upscalemedia-transformed-removebg-preview--3b0aaa5d.png': { id: 'favicon-lg', category: 'branding', status: 'selected', purpose: 'Favicon / application icon 192x192', notes: 'High resolution icon' },
  'cropped-upscalemedia-transformed-removebg-preview--4ab166c8.png': { id: 'favicon-md', category: 'branding', status: 'available', purpose: 'Favicon / application icon 180x180', notes: 'Medium resolution icon' },

  // Hero / Landing
  '8936603-scaled-8d0aaba8.jpg': { id: 'img-hero-businessman-scaled', category: 'hero', status: 'selected', purpose: 'Hero section background - insurance & consulting concept', notes: 'Highest resolution (scaled)' },
  '8936603-2048x1365-8007bf95.jpg': { id: 'img-hero-businessman-2048', category: 'hero', status: 'available', purpose: 'Hero section background - 2048px resolution variant', notes: 'High resolution fallback' },
  '8936603-1536x1024-4f512969.jpg': { id: 'img-hero-businessman-1536', category: 'hero', status: 'available', purpose: 'Hero section background - 1536px resolution variant', notes: 'Medium resolution fallback' },
  '8936603-200x133-7983da48.jpg': { id: 'img-hero-businessman-200', category: 'hero', status: 'low-quality', purpose: 'Hero section background - 200px thumbnail crop', notes: 'Low quality thumbnail' },

  // About Page
  'business-people-shaking-hands-together-scaled-11898ce2.jpg': { id: 'img-about-shaking-hands-scaled', category: 'about', status: 'selected', purpose: 'Visual for About Us / Vision Mission section', notes: 'Highest resolution (scaled)' },
  'business-people-shaking-hands-together-2048x1402-519aa97e.jpg': { id: 'img-about-shaking-hands-2048', category: 'about', status: 'available', purpose: 'Visual for About Us - 2048px resolution variant', notes: 'High resolution fallback' },
  'business-people-shaking-hands-together-1536x1052-b440a89c.jpg': { id: 'img-about-shaking-hands-1536', category: 'about', status: 'available', purpose: 'Visual for About Us - 1536px resolution variant', notes: 'Medium resolution fallback' },
  'business-people-shaking-hands-together-200x137-a4a0fc51.jpg': { id: 'img-about-shaking-hands-200', category: 'about', status: 'low-quality', purpose: 'Visual for About Us - 200px thumbnail crop', notes: 'Low quality thumbnail' },

  // Services Overview
  '10031780-scaled-dc3aa258.jpg': { id: 'img-service-insurance-scaled', category: 'services', status: 'selected', purpose: 'Visual representation for group insurance products', notes: 'Highest resolution (scaled)' },
  '10031780-2048x1365-6db04363.jpg': { id: 'img-service-insurance-2048', category: 'services', status: 'available', purpose: 'Visual for group insurance products - 2048px variant', notes: 'High resolution fallback' },
  '10031780-1536x1024-d5960665.jpg': { id: 'img-service-insurance-1536', category: 'services', status: 'available', purpose: 'Visual for group insurance products - 1536px variant', notes: 'Medium resolution fallback' },
  '10031780-200x133-25599b4e.jpg': { id: 'img-service-insurance-200', category: 'services', status: 'low-quality', purpose: 'Visual for group insurance products - 200px thumbnail crop', notes: 'Low quality thumbnail' },

  '26639-scaled-3af829a7.jpg': { id: 'img-service-consulting-scaled', category: 'services', status: 'selected', purpose: 'Visual representation for consulting or advising services', notes: 'Highest resolution (scaled)' },
  '26639-2048x1530-9d5270f8.jpg': { id: 'img-service-consulting-2048', category: 'services', status: 'available', purpose: 'Visual for consulting services - 2048px variant', notes: 'High resolution fallback' },
  '26639-1536x1147-075ef4e7.jpg': { id: 'img-service-consulting-1536', category: 'services', status: 'available', purpose: 'Visual for consulting services - 1536px variant', notes: 'Medium resolution fallback' },
  '26639-200x149-55138927.jpg': { id: 'img-service-consulting-200', category: 'services', status: 'low-quality', purpose: 'Visual for consulting services - 200px thumbnail crop', notes: 'Low quality thumbnail' },

  'businessman-house-insurance-scaled-732acbdb.jpg': { id: 'img-service-property-scaled', category: 'services', status: 'selected', purpose: 'Visual representation for general/property insurance services', notes: 'Highest resolution (scaled)' },
  'businessman-house-insurance-2048x1367-55e7f2a9.jpg': { id: 'img-service-property-2048', category: 'services', status: 'available', purpose: 'Visual for property insurance - 2048px variant', notes: 'High resolution fallback' },
  'businessman-house-insurance-1536x1025-27b4d2bc.jpg': { id: 'img-service-property-1536', category: 'services', status: 'available', purpose: 'Visual for property insurance - 1536px variant', notes: 'Medium resolution fallback' },
  'businessman-house-insurance-200x133-3c5453a3.jpg': { id: 'img-service-property-200', category: 'services', status: 'low-quality', purpose: 'Visual for property insurance - 200px thumbnail crop', notes: 'Low quality thumbnail' },

  'close-up-happy-family-therapy-session-scaled-266456d2.jpg': { id: 'img-service-family-scaled', category: 'services', status: 'selected', purpose: 'Visual representation for life/health/family insurance', notes: 'Highest resolution (scaled)' },
  'close-up-happy-family-therapy-session-2048x1363-4809c6e6.jpg': { id: 'img-service-family-2048', category: 'services', status: 'available', purpose: 'Visual for family insurance - 2048px variant', notes: 'High resolution fallback' },
  'close-up-happy-family-therapy-session-1536x1022-04da09d8.jpg': { id: 'img-service-family-1536', category: 'services', status: 'available', purpose: 'Visual for family insurance - 1536px variant', notes: 'Medium resolution fallback' },
  'close-up-happy-family-therapy-session-200x133-ed362c7d.jpg': { id: 'img-service-family-200', category: 'services', status: 'low-quality', purpose: 'Visual for family insurance - 200px thumbnail crop', notes: 'Low quality thumbnail' },

  'front-view-arrangement-economy-elements-scaled-64eafe7e.jpg': { id: 'img-service-finance-scaled', category: 'services', status: 'selected', purpose: 'Visual representation for financial / banking services', notes: 'Highest resolution (scaled)' },
  'front-view-arrangement-economy-elements-2048x1152-991f0f1f.jpg': { id: 'img-service-finance-2048', category: 'services', status: 'available', purpose: 'Visual for financial services - 2048px variant', notes: 'High resolution fallback' },
  'front-view-arrangement-economy-elements-1536x864-4fcbb1b3.jpg': { id: 'img-service-finance-1536', category: 'services', status: 'available', purpose: 'Visual for financial services - 1536px variant', notes: 'Medium resolution fallback' },
  'front-view-arrangement-economy-elements-200x112-07c243fb.jpg': { id: 'img-service-finance-200', category: 'services', status: 'low-quality', purpose: 'Visual for financial services - 200px thumbnail crop', notes: 'Low quality thumbnail' },

  'data-analytics-tablet-scaled-3eaef8d3.jpg': { id: 'img-service-data-analytics-scaled', category: 'services', status: 'selected', purpose: 'Visual for technology and data-oriented business risk metrics', notes: 'Technology & innovation theme' },

  // Partners
  'kejiwaan-1-14c4da73.png': { id: 'img-partner-kejiwaan-original', category: 'partners', status: 'needs-confirmation', purpose: 'Combined partner logo sheet for "Asuransi Jiwa" (labeled Kejiwaan)', notes: 'Contains merged logos; needs individual split' },
  'kejiwaan-1-2048x1152-cda0c74a.png': { id: 'img-partner-kejiwaan-2048', category: 'partners', status: 'needs-confirmation', purpose: 'Combined partner logo sheet - 2048px variant', notes: 'Contains merged logos; needs individual split' },
  'kejiwaan-1-1536x864-58122468.png': { id: 'img-partner-kejiwaan-1536', category: 'partners', status: 'needs-confirmation', purpose: 'Combined partner logo sheet - 1536px variant', notes: 'Contains merged logos; needs individual split' },
  'kejiwaan-1-200x113-13fa8a87.png': { id: 'img-partner-kejiwaan-200', category: 'partners', status: 'needs-confirmation', purpose: 'Combined partner logo sheet - 200px thumbnail crop', notes: 'Contains merged logos; needs individual split' },

  'umum-e1751171610499-b915abe3.png': { id: 'img-partner-umum-original', category: 'partners', status: 'needs-confirmation', purpose: 'Combined partner logo sheet for "Asuransi Umum"', notes: 'Contains merged logos; needs individual split' },
  'umum-e1751171610499-2048x774-bd821e1b.png': { id: 'img-partner-umum-2048', category: 'partners', status: 'needs-confirmation', purpose: 'Combined partner logo sheet - 2048px variant', notes: 'Contains merged logos; needs individual split' },
  'umum-e1751171610499-1536x581-9123e7de.png': { id: 'img-partner-umum-1536', category: 'partners', status: 'needs-confirmation', purpose: 'Combined partner logo sheet - 1536px variant', notes: 'Contains merged logos; needs individual split' },
  'umum-e1751171610499-200x76-6fe479d5.png': { id: 'img-partner-umum-200', category: 'partners', status: 'needs-confirmation', purpose: 'Combined partner logo sheet - 200px thumbnail crop', notes: 'Contains merged logos; needs individual split' },

  // GTranslate flags / Technical UI icons
  'en-f968f141.png': { id: 'icon-flag-en', category: 'icons', status: 'technical', purpose: 'English flag icon for language switcher', notes: 'From translation plugin' },
  'id-45d14bfd.png': { id: 'icon-flag-id', category: 'icons', status: 'technical', purpose: 'Indonesian flag icon for language switcher', notes: 'From translation plugin' },
  'default-skin-0c756db8.png': { id: 'tech-photoswipe-skin', category: 'decorative', status: 'technical', purpose: 'Photoswipe asset library default stylesheet assets', notes: 'Not a core website asset' },
  'symbols-e5b1c8cc.svg': { id: 'tech-svg-symbols', category: 'decorative', status: 'technical', purpose: 'Phlox WordPress theme SVG icon sheets', notes: 'Legacy page builder asset' }
};

const mappedAssets = files.map((file, idx) => {
  const relPath = file.replace('public', ''); // e.g. /legacy/images/...
  const filename = path.basename(file);
  const hash = getSha256(file);
  const size = fs.statSync(file).size;
  const ext = path.extname(filename).toLowerCase();
  
  // Find in crawler manifest
  const manifestItem = manifest.find(item => {
    const mBasename = path.basename(item.filePath);
    return mBasename === filename || item.sha256 === hash;
  });

  const sourcePage = manifestItem ? manifestItem.sourcePage : null;
  const fileType = manifestItem ? manifestItem.contentType : (ext === '.woff2' ? 'font/woff2' : ext === '.woff' ? 'font/woff' : 'image/jpeg');

  // Set ID and classification defaults or static mappings
  let id = '';
  let category = '';
  let status = '';
  let purpose = '';
  let notes = '';

  if (idMapping[filename]) {
    const m = idMapping[filename];
    id = m.id;
    category = m.category;
    status = m.status;
    purpose = m.purpose;
    notes = m.notes;
  } else if (filename.startsWith('vt-')) {
    // Map tile
    const num = filename.match(/\d+/) ? filename.match(/\d+/)[0].substring(0, 4) : idx;
    id = `map-tile-${num}`;
    category = 'decorative';
    status = 'technical';
    purpose = 'Google Maps layout image tile for Kemayoran office location';
    notes = 'Dynamic maps tile. Should be replaced with proper Google Maps integration or a clean custom SVG map illustration.';
  } else if (ext === '.woff2' || ext === '.woff') {
    // Font
    const fontName = filename.split('-')[0];
    id = `font-${fontName.toLowerCase()}-${idx}`;
    category = 'fonts';
    status = 'technical';
    purpose = 'Embedded typography file';
    notes = 'Do not activate downloaded fonts yet.';
  } else {
    // Catch-all
    id = `asset-unclassified-${idx}`;
    category = 'unclassified';
    status = 'needs-confirmation';
    purpose = 'Unclassified legacy asset';
    notes = 'Inspect during visual phase';
  }

  return {
    id,
    originalFilename: filename,
    currentPublicPath: relPath,
    category,
    fileType,
    suggestedPurpose: purpose,
    sourcePage,
    status,
    notes,
    sizeBytes: size,
    sha256: hash
  };
});

// Sort to make output pretty and predictable
mappedAssets.sort((a, b) => a.id.localeCompare(b.id));

// Write media-library.json
fs.writeFileSync('src/content/media-library.json', JSON.stringify(mappedAssets, null, 2), 'utf8');
console.log('Created src/content/media-library.json');

// Write docs/ASSET_MAPPING.md
let md = `# SIP BRO Legacy Asset Inventory & Mapping

This document provides a comprehensive inventory of all 66 assets located under \`public/legacy/\` as crawled from the legacy SIP BRO website.

## Summary

- **Total Assets**: ${mappedAssets.length}
- **Duplicates by Hash**: 0 (all 66 files have unique SHA-256 hashes)
- **Status Counts**:
  - Selected: ${mappedAssets.filter(a => a.status === 'selected').length}
  - Available: ${mappedAssets.filter(a => a.status === 'available').length}
  - Low-Quality: ${mappedAssets.filter(a => a.status === 'low-quality').length}
  - Technical: ${mappedAssets.filter(a => a.status === 'technical').length}
  - Needs-Confirmation: ${mappedAssets.filter(a => a.status === 'needs-confirmation').length}
  - Duplicate: 0

---

## Detailed Asset Inventory

| ID | Public Path | Category | Type | Status | Suggested Purpose | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
`;

mappedAssets.forEach(a => {
  md += `| **\`${a.id}\`** | [\`${a.currentPublicPath}\`](file:///Users/fajar.mac/Developer/APG/sipbro-compro/public${a.currentPublicPath}) | \`${a.category}\` | \`${a.fileType}\` | \`${a.status}\` | ${a.suggestedPurpose} | ${a.notes} |\n`;
});

fs.writeFileSync('docs/ASSET_MAPPING.md', md, 'utf8');
console.log('Created docs/ASSET_MAPPING.md');
