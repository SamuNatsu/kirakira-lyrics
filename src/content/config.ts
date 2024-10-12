/// Content config
import { defineCollection, reference, z } from 'astro:content';

// Collections
const albumCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    title_zhcn: z.string().optional(),
    title_zhtw: z.string().optional(),
    artists: z.array(reference('artists')),
    img: z.string().optional()
  })
});

const artistCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    name_zhcn: z.string().optional(),
    name_zhtw: z.string().optional(),
    img: z.string().optional()
  })
});

const songCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    title_zhcn: z.string().optional(),
    title_zhtw: z.string().optional(),
    artists: z.array(reference('artists')),
    album: reference('albums'),
    img: z.string().optional()
  })
});

// Export collections
export const collections = {
  albums: albumCollection,
  artists: artistCollection,
  songs: songCollection
};
