# Andrea Zuluaga — Portafolio

Portafolio profesional de **Andrea Zuluaga** — Data Analyst | Process Automation | FinOps.

Diseño premium tipo SaaS (estilo Linear / Vercel / Raycast), dark mode por defecto con acentos morado/azul, light mode opcional.

## Stack

- **Astro** (static site) + **TypeScript**
- **Tailwind CSS** (tokens semánticos con dark/light)
- **Framer Motion** (animaciones de entrada — islands de React)
- SEO completo: meta tags, Open Graph, JSON-LD, **sitemap** y **robots.txt**

## Desarrollo local

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo → http://localhost:4321
npm run build    # build de producción a /dist
npm run preview  # previsualizar el build
```

> En `dev` el sitio se sirve en la raíz (`/`). En el build de producción se usa el
> base path de GitHub Pages (`/andrea-zuluaga-portfolio`).

## Estructura

```
src/
├── data/           # Contenido editable (site, skills, projects, impact)
├── components/     # Nav, Hero, About, Skills, Impact, Projects, Contact, Footer
├── layouts/        # Base.astro (SEO + tema)
├── styles/         # global.css (tokens de color, glow, utilidades)
└── pages/          # index.astro
public/             # favicon, robots.txt, og.jpg
```

## Editar contenido

| Quiero cambiar...        | Archivo                       |
|--------------------------|-------------------------------|
| Nombre, contacto, links  | `src/data/site.ts`            |
| Skills                   | `src/data/skills.ts`          |
| Proyectos                | `src/data/projects.ts`        |
| Métricas de impacto      | `src/data/impact.ts`          |
| Colores / tema           | `src/styles/global.css`       |
| Foto de perfil           | `src/assets/andrea.jpg`       |

## Deploy a GitHub Pages

1. Crea el repo `andrea-zuluaga-portfolio` en la cuenta **AndreaDev5**.
2. `git remote add origin https://github.com/AndreaDev5/andrea-zuluaga-portfolio.git`
3. `git push -u origin main`
4. En GitHub → **Settings → Pages → Source: GitHub Actions**.
5. El workflow `.github/workflows/deploy.yml` publica automáticamente en cada push a `main`.

Sitio final: **https://AndreaDev5.github.io/andrea-zuluaga-portfolio**

## Formulario de contacto

Funciona sin backend: abre el cliente de correo con el mensaje prellenado (`mailto:`).
Para envío directo desde el sitio, cambia el formulario a [Formspree](https://formspree.io)
(`action="https://formspree.io/f/XXXX"` `method="POST"`) en `src/components/Contact.astro`.
