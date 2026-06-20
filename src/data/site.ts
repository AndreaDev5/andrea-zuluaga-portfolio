// Configuración central del sitio. Edita aquí tus datos de contacto y enlaces.
export const site = {
  name: 'Andrea Zuluaga',
  role: 'Data Analyst | Process Automation | FinOps',
  tagline:
    'Transformo datos operativos en decisiones estratégicas mediante automatización, análisis y optimización de procesos.',
  location: 'Colombia',
  email: 'andrazuluagamonroy05@gmail.com',
  linkedin: 'https://www.linkedin.com/in/andrea-zuluaga-monroy',
  github: 'https://github.com/AndreaDev5',
  // URL pública del sitio (GitHub Pages)
  url: 'https://AndreaDev5.github.io/andrea-zuluaga-portfolio',
  description:
    'Portafolio profesional de Andrea Zuluaga — Data Analyst especializada en automatización de procesos, FinOps e inteligencia artificial aplicada. Convierto datos operativos en decisiones de negocio.',
} as const;

export const nav = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Impacto', href: '#impact' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
] as const;
