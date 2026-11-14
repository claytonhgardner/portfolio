import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/*
 * Content is edited through Pages CMS (see .pages.yml) and stored as
 * Markdown files with YAML frontmatter. Pages CMS may save empty optional
 * fields as "" or null, so `optional` normalizes those to undefined.
 *
 * Image fields hold paths like "/src/assets/images/Photo.jpg".
 * src/lib/images.ts turns those into optimized images at build time.
 */
const optional = z
  .string()
  .nullish()
  .transform((v) => (v && v.trim() ? v : undefined));

const imageRef = z.object({
  image: z.string(),
  alt: z.string().nullish().transform((v) => v ?? ''),
});

const list = <T extends z.ZodTypeAny>(item: T) =>
  z.array(item).nullish().transform((v) => v ?? []);

const site = defineCollection({
  loader: glob({ pattern: 'index.md', base: './src/content/site' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    location: z.string(),
    locationShort: optional,
    email: z.string(),
    phone: optional,
    linkedin: optional,
    resume: optional,
    bio: z.string(),
    headline: list(z.object({ strong: z.string(), rest: optional })),
    capabilities: list(z.string()),
    skillGroups: list(z.object({ heading: z.string(), skills: list(z.string()) })),
    closingHeadline: z.string(),
    closingText: optional,
    seoDescription: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number().nullish().transform((v) => v ?? 100),
    hidden: z.boolean().nullish().transform((v) => v ?? false),
    layout: z.enum(['case-study', 'gallery']).nullish().transform((v) => v ?? 'case-study'),
    label: z.string().nullish().transform((v) => v || 'Case Study'),
    subtitle: optional,
    tagline: optional,
    images: list(imageRef),
    sections: list(z.object({ heading: z.string(), text: z.string() })),
    details: list(
      z.object({
        heading: z.string(),
        text: optional,
        image: optional,
        alt: optional,
        colors: list(z.string()),
      }),
    ),
    items: list(
      z.object({
        title: z.string(),
        text: optional,
        images: list(imageRef),
      }),
    ),
  }),
});

export const collections = { site, projects };
