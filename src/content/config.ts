/// Content config
import { defineCollection, reference, z } from 'astro:content';

// Collections
const albumCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    title_zhcn: z.string().optional(),
    title_zhtw: z.string().optional(),
    title_alts: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
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
    name_alts: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    home_page: z.string().url().optional(),
    img: z.string().optional()
  })
});

const songCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    title_zhcn: z.string().optional(),
    title_zhtw: z.string().optional(),
    title_alts: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    artists: z.array(reference('artists')),
    album: reference('albums').optional(),
    img: z.string().optional(),
    lyrics: z.array(
      z.object({
        jp: z.string(),
        zhcn: z.string().optional(),
        zhtw: z.string().optional(),
        time: z.number().int().min(0).optional()
      })
    )
  })
});

// Export collections
export const collections = {
  albums: albumCollection,
  artists: artistCollection,
  songs: songCollection
};
