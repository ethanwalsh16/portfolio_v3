import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string().optional(),
    dateRange: z.string(),
    order: z.number(),
    stack: z.array(z.string()),
    featured: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    stack: z.array(z.string()),
    status: z.enum(['complete', 'in-progress']).optional(),
    github: z.url().optional(),
    demo: z.url().optional(),
    image: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { work, projects };