import { defineCollection, z } from 'astro:content';

// Colección de posts del blog. Cada archivo .md en src/content/blog/
// genera su propia página en /blog/<nombre-del-archivo>/
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Subtítulo / resumen corto que se muestra en el listado (1–2 líneas).
    excerpt: z.string(),
    // Fecha en formato ISO 'YYYY-MM-DD'.
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe ser 'YYYY-MM-DD'"),
    tags: z.array(z.string()).default([]),

    // --- Serie (opcional) — agrupa varios artículos bajo un mismo hilo ---
    series: z.string().optional(),
    seriesOrder: z.number().int().positive().optional(),

    // --- Ilustración (opcional) — clave registrada en src/components/PostArt.astro ---
    art: z.string().optional(),

    // --- Portada con imagen (opcional) — ruta dentro de /public, ej. 'blog/foto.jpg'.
    //     Si se define, tiene prioridad sobre `art`. ---
    cover: z.string().optional(),
    coverAlt: z.string().optional(),

    // Borrador: se ve en local pero no se publica.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
