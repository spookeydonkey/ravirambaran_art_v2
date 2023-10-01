// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define your collection(s)
const entriesCollection = defineCollection({
    schema: ({image}) => z.object({
        author: z.string(),
        date: z.string().optional(),
        image: image(),
        title: z.string(),
        tags: z.array(z.string().optional()),
        description: z.string().optional(),
    }),
});

// Define the collection schema as a property of the returned object

// 3. Export a single `collections` object to register your collection(s)
// This key should match your collection directory name in "src/content"
export const collections = {
  entries: entriesCollection,
};