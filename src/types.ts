export interface MediaItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  description?: string;
  cardLabel?: string;
  category?: string;
  type?: 'image' | 'video';
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | '9/16' | 'cinestill';
}
