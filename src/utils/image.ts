/// Image utils
import type { ImageMetadata } from 'astro';

// Types
type ImgEntity = { default: ImageMetadata };
type ImgListMap = Record<string, Record<string, () => Promise<ImgEntity>>>;

// Constants
const IMG_ALIAS_MAP: Record<string, string> = {
  '@img-album': '/src/assets/images/albums',
  '@img-artist': '/src/assets/images/artists',
  '@img-song': '/src/assets/images/songs'
};
const IMG_ALIAS_LIST_MAP: ImgListMap = {
  '@img-album': import.meta.glob<ImgEntity>('/src/assets/images/albums/*'),
  '@img-artist': import.meta.glob<ImgEntity>('/src/assets/images/artists/*'),
  '@img-song': import.meta.glob<ImgEntity>('/src/assets/images/songs/*')
};

// Functions
export const getImageFromAlias = (alias: string): Promise<ImgEntity> => {
  const k: string = alias.split('/', 1)[0];
  if (IMG_ALIAS_MAP[k] === undefined) {
    throw `Image alias "${alias}" not found`;
  }

  return IMG_ALIAS_LIST_MAP[k][alias.replace(k, IMG_ALIAS_MAP[k])]();
};
