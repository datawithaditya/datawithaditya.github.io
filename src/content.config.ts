import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One markdown file per project → one card + one detail page.
// Frontmatter fields match what the card renders; body is the article body.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    badge: z.string(), // e.g. "Flagship", "SaaS · Founder"
    company: z.enum(['dh', 'synchem', 'personal']),
    period: z.string(), // shown on card, e.g. "Oct 2025"
    // Sort key: number, higher = more recent. Card order within a company
    // block, top → bottom, is descending sortKey.
    sortKey: z.number(),
    tech: z.array(z.string()),
    description: z.string(), // one-line summary on the card
    // Article page metadata
    articleBadgeLabel: z.string().optional(),
    articleCompanyLabel: z.string().optional(),
    articleYear: z.string().optional(),
    lede: z.string(),
    externalUrl: z.string().url().optional(),
    externalLabel: z.string().optional(),
    screenshot: z.string().optional(),
    screenshotAlt: z.string().optional(),
    // If true, hide from index. Useful for drafts.
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
