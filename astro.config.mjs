import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from 'astro-icon';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build
export default defineConfig({
  // Producción: GitHub Pages → https://AndreaDev5.github.io/andrea-zuluaga-portfolio
  site: 'https://AndreaDev5.github.io',
  // En dev se sirve en la raíz para una validación local cómoda; en build usa el base del repo.
  base: isProd ? '/andrea-zuluaga-portfolio' : '/',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    icon(),
  ],
});
