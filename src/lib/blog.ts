import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/**
 * Posts publicados, del más reciente al más antiguo.
 * Si dos comparten fecha (típico en una serie), se ordenan por `seriesOrder`
 * ascendente para respetar el orden de lectura. Los borradores solo se ven en dev.
 */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => {
    const porFecha = b.data.date.localeCompare(a.data.date);
    if (porFecha !== 0) return porFecha;
    return (a.data.seriesOrder ?? 0) - (b.data.seriesOrder ?? 0);
  });
}

/** Artículos de una misma serie, en orden de lectura. */
export async function getSeries(nombre: string): Promise<BlogPost[]> {
  const posts = await getPublishedPosts();
  return posts
    .filter((p) => p.data.series === nombre)
    .sort((a, b) => (a.data.seriesOrder ?? 0) - (b.data.seriesOrder ?? 0));
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** URL de un post, respetando el base path de GitHub Pages. */
export const postUrl = (slug: string) => `${base}/blog/${slug}/`;

/** URL interna cualquiera, respetando el base path. */
export const url = (path: string) => `${base}/${path.replace(/^\//, '')}`;
