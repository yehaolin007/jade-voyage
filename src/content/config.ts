import { defineCollection, z } from 'astro:content';

const tours = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    region: z.string(),
    category: z.enum(['Wellness', 'Medical', 'Culture', 'Bespoke']),
    nights: z.number().int().positive(),
    groupSize: z.string(),
    season: z.string(),
    priceFrom: z.number().positive(),
    currency: z.string().default('USD'),
    rating: z.number().min(0).max(5),
    reviews: z.number().int().nonnegative(),
    badge: z
      .object({
        label: z.string(),
        type: z.enum(['default', 'seal']).optional(),
      })
      .optional(),
    image: z.string(),
    alt: z.string(),
    order: z.number().int().default(0),
    featured: z.boolean().default(true),
  }),
});

const stories = defineCollection({
  type: 'content',
  schema: z.object({
    cardLayout: z.enum(['video', 'quote']),
    guestName: z.string().optional(),
    location: z.string().optional(),
    trip: z.string().optional(),
    avatar: z.string().optional(),
    image: z.string().optional(),
    headline: z.string().optional(),
    citation: z.string().optional(),
    order: z.number().int().default(0),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    cnTitle: z.string(),
    iconSvg: z.string(),
    cta: z.string().default('Learn more'),
    order: z.number().int().default(0),
  }),
});

export const collections = { tours, stories, services };
