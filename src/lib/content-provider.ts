import { SiteContent, MediaAsset, ServiceContent, PartnerContent } from '@/types/content';
import mediaLibraryData from '@/content/media-library.json';
import { siteContentID, siteContentEN } from '@/content/site-content';

export interface ContentProvider {
  getSiteContent(locale: string): Promise<SiteContent>;
  getMediaLibrary(): Promise<MediaAsset[]>;
  getServices(locale: string): Promise<ServiceContent>;
  getPartners(): Promise<PartnerContent>;
}

export class LocalContentProvider implements ContentProvider {
  async getSiteContent(locale: string): Promise<SiteContent> {
    const cleanLocale = locale.toLowerCase().startsWith('en') ? 'en' : 'id';
    return cleanLocale === 'en' ? siteContentEN : siteContentID;
  }

  async getMediaLibrary(): Promise<MediaAsset[]> {
    return mediaLibraryData as MediaAsset[];
  }

  async getServices(locale: string): Promise<ServiceContent> {
    const content = await this.getSiteContent(locale);
    return content.services;
  }

  async getPartners(): Promise<PartnerContent> {
    const content = await this.getSiteContent('id');
    return content.partners;
  }
}

// Export the active content provider instance.
// This allows components to import this instance and not be coupled
// to the static data source, making it easily replaceable with a CMS provider later.
export const activeContentProvider: ContentProvider = new LocalContentProvider();
