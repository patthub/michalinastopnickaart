import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Astro 5: kolekcja przez loader glob. Pliki .md leżą w src/content/produkty/.
const produkty = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/produkty' }),
  schema: z.object({
    nazwa: z.string(),
    skrot: z.string(),
    zdjecia: z.array(z.string()).min(1),
    glina: z.string().optional(),
    szkliwo: z.string().optional(),
    wypal: z.string().optional(),
    wymiary: z.string().optional(),
    rok: z.number().optional(),
    kategoria: z.enum(['naczynia', 'wazony', 'rzezba', 'kafle']),
    kolejnosc: z.number().default(99),
    dostepny: z.boolean().default(true),
    linki: z
      .array(z.object({ etykieta: z.string(), url: z.string().url() }))
      .default([]),
  }),
});

export const collections = { produkty };
