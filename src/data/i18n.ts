// Diccionario de traducciones ES / EN.
// Las claves se aplican en el cliente vía [data-i18n] (innerHTML),
// [data-i18n-ph] (placeholder) y [data-i18n-aria] (aria-label).
// Términos técnicos/roles (Data Analyst, WIP, Claude, etc.) se mantienen en inglés en ambos idiomas.
export type Lang = 'es' | 'en';

export const dict: Record<Lang, Record<string, string>> = {
  es: {
    // Nav
    nav_home: 'Inicio',
    nav_about: 'Sobre mí',
    nav_skills: 'Skills',
    nav_impact: 'Impacto',
    nav_projects: 'Proyectos',
    nav_blog: 'Blog',
    nav_contact: 'Contacto',
    aria_menu: 'Abrir menú',
    aria_lang: 'Cambiar idioma',

    // Hero
    hero_badge: 'Disponible para nuevos retos',
    hero_role: 'Data Analyst · <span class="text-gradient">AI Solutions</span> · Process Automation',
    hero_tagline:
      'Convierto datos operativos en oportunidades de mejora mediante análisis, optimización de procesos y automatización.',
    hero_cta_projects: 'Ver Proyectos',
    hero_cta_contact: 'Contacto',

    // Marquee
    marquee_title: 'Herramientas & tecnologías',

    // About
    about_eyebrow: 'Sobre mí',
    about_title: 'Hecho es mejor que <span class="text-gradient">perfecto</span>',
    about_p1:
      'Soy <span class="font-medium text-ink">Analista y Desarrolladora de Software</span>. Durante mi trayectoria aprendí cómo funciona el desarrollo de un proyecto de principio a fin, y con el tiempo descubrí que lo que realmente me apasiona es <span class="font-medium text-ink">transformar procesos</span>.',
    about_p2:
      'Hoy me enfoco en el <span class="font-medium text-ink">análisis de datos</span> y la <span class="font-medium text-ink">automatización de procesos</span>: encuentro lo que se puede mejorar y lo convierto en soluciones más simples, eficientes y con impacto real.',
    about_p3:
      'Todo con un <span class="font-medium text-ink">enfoque minimalista</span>: priorizo la claridad, la funcionalidad y el valor real por encima de la complejidad innecesaria. Y sobre todo, <span class="font-medium text-ink">me encanta aprender constantemente</span>: cada reto nuevo es una oportunidad para crecer.',
    about_h1: 'Organización',
    about_h2: 'Comunicación efectiva',
    about_h3: 'Trabajo en equipo',
    about_h4: 'Aprendizaje continuo',

    // Impact
    impact_title: 'Impacto',
    impact_subtitle: 'A veces las mejores ideas ocurren cuando te enfocas en entender los flujos.',
    impact_m1: 'Procesos automatizados',
    impact_m2: 'Dashboards creados',
    impact_m3: 'Reportes optimizados',
    impact_m4: 'Indicadores implementados',
    impact_m5: 'Ahorro de tiempo operativo',

    // Projects
    projects_eyebrow: 'Proyectos',
    projects_intro: 'Soluciones de datos, automatización e IA aplicadas a problemas reales de operación.',
    proj_0_title: 'Dashboard de KPIs Operativos',
    proj_0_desc:
      'Plataforma que unifica los indicadores clave de la operación en un solo lugar. Migré los indicadores (reportes) desde Power BI a un proyecto sobre Claude, eliminando las fuentes externas que dependían de actualización manual para trabajar con una única fuente de datos confiable. Este dashboard integra diferentes reportes como el Módulo de Horas, WIP, Controles WIP, Facturación y Proyección.',
    proj_1_title: 'Automatización de Reportes',
    proj_1_desc:
      'Automatización de procesos en el área de Operaciones, como el envío de reportes automáticos por correo. Reemplaza la consolidación y el envío manual por un flujo programado y confiable.',
    proj_2_title: 'Agente de Reporte de Horas',
    proj_2_desc:
      'Agente que envía un reporte semanal de las horas imputadas por cada colaborador, con semáforo de cumplimiento (oportuno / no oportuno) y alertas automáticas.',

    // Blog
    blog_title:
      'Datos e Inteligencia Artificial: <span class="text-gradient">de la información a la transformación</span>',
    blog_subtitle:
      'Explorando cómo las organizaciones pueden integrar Inteligencia Artificial de manera estratégica, comenzando por el entendimiento del negocio, sus procesos actuales y las oportunidades de mejora que permitan construir soluciones de valor.',
    blog_posts_one: 'publicación',
    blog_posts_many: 'publicaciones',
    blog_series_one: 'serie',
    blog_series_many: 'series',
    blog_all: 'Todas las publicaciones',
    blog_none: 'Aún no hay publicaciones.',
    blog_part: 'serie · parte',
    blog_draft: 'borrador',
    blog_read: 'Leer artículo',
    blog_back: 'Volver al blog',
    blog_cta: '¿Te interesa conversar sobre datos, automatización o IA aplicada?',
    blog_cta_btn: 'Escríbeme',

    // Contact
    contact_eyebrow: 'Contacto',
    contact_title: 'Hablemos',
    contact_intro:
      '¿Tienes un proyecto de datos, automatización o IA en mente? Escríbeme y conversemos.',
    contact_label_name: 'Nombre',
    contact_label_email: 'Email',
    contact_label_message: 'Mensaje',
    contact_ph_name: 'Tu nombre',
    contact_ph_email: 'tu@email.com',
    contact_ph_message: 'Cuéntame sobre tu proyecto…',
    contact_btn: 'Enviar mensaje',

    // Footer
    footer_rights: 'Todos los derechos reservados',
  },
  en: {
    // Nav
    nav_home: 'Home',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_impact: 'Impact',
    nav_projects: 'Projects',
    nav_blog: 'Blog',
    nav_contact: 'Contact',
    aria_menu: 'Open menu',
    aria_lang: 'Change language',

    // Hero
    hero_badge: 'Open to new opportunities',
    hero_role: 'Data Analytics · <span class="text-gradient">AI Solutions</span> · Process Automation',
    hero_tagline:
      'I turn operational data into strategic decisions through automation, analysis and process optimization.',
    hero_cta_projects: 'View Projects',
    hero_cta_contact: 'Contact',

    // Marquee
    marquee_title: 'Tools & technologies',

    // About
    about_eyebrow: 'About',
    about_title: 'Done is better than <span class="text-gradient">perfect</span>',
    about_p1:
      "I'm a <span class=\"font-medium text-ink\">Software Analyst and Developer</span>. Along the way I learned how a project works from start to finish, and over time I discovered that what I'm truly passionate about is <span class=\"font-medium text-ink\">transforming processes</span>.",
    about_p2:
      'Today I focus on <span class="font-medium text-ink">data analysis</span> and <span class="font-medium text-ink">process automation</span>: I find what can be improved and turn it into simpler, more efficient solutions with real impact.',
    about_p3:
      'All with a <span class="font-medium text-ink">minimalist approach</span>: I prioritize clarity, functionality and real value over unnecessary complexity. And above all, <span class="font-medium text-ink">I love learning constantly</span>: every new challenge is a chance to grow.',
    about_h1: 'Organization',
    about_h2: 'Effective communication',
    about_h3: 'Teamwork',
    about_h4: 'Continuous learning',

    // Impact
    impact_title: 'Impact',
    impact_subtitle: 'Sometimes the best ideas come when you focus on understanding the flows.',
    impact_m1: 'Automated processes',
    impact_m2: 'Dashboards built',
    impact_m3: 'Reports optimized',
    impact_m4: 'KPIs implemented',
    impact_m5: 'Operational time saved',

    // Projects
    projects_eyebrow: 'Projects',
    projects_intro: 'Data, automation and AI solutions applied to real operational problems.',
    proj_0_title: 'Operational KPIs Dashboard',
    proj_0_desc:
      'A platform that unifies the operation’s key indicators in a single place. I migrated the indicators (reports) from Power BI to a Claude-based project, removing external sources that relied on manual updates in favor of a single, reliable source of data. This dashboard integrates several reports such as the Hours Module, WIP, WIP Controls, Billing and Forecasting.',
    proj_1_title: 'Report Automation',
    proj_1_desc:
      'Process automation in the Operations area, such as automatic report delivery by email. It replaces manual consolidation and sending with a scheduled, reliable workflow.',
    proj_2_title: 'Hours Reporting Agent',
    proj_2_desc:
      'An agent that sends a weekly report of the hours logged by each team member, with a compliance traffic light (on time / late) and automatic alerts.',

    // Blog
    blog_title:
      'Data & Artificial Intelligence: <span class="text-gradient">from information to transformation</span>',
    blog_subtitle:
      'Exploring how organizations can integrate Artificial Intelligence strategically, starting from a real understanding of the business, its current processes and the improvement opportunities that make it possible to build solutions with genuine value.',
    blog_posts_one: 'post',
    blog_posts_many: 'posts',
    blog_series_one: 'series',
    blog_series_many: 'series',
    blog_all: 'All posts',
    blog_none: 'No posts yet.',
    blog_part: 'series · part',
    blog_draft: 'draft',
    blog_read: 'Read article',
    blog_back: 'Back to blog',
    blog_cta: 'Interested in talking about data, automation or applied AI?',
    blog_cta_btn: 'Get in touch',

    // Contact
    contact_eyebrow: 'Contact',
    contact_title: "Let's talk",
    contact_intro: "Have a data, automation or AI project in mind? Drop me a message and let's talk.",
    contact_label_name: 'Name',
    contact_label_email: 'Email',
    contact_label_message: 'Message',
    contact_ph_name: 'Your name',
    contact_ph_email: 'you@email.com',
    contact_ph_message: 'Tell me about your project…',
    contact_btn: 'Send message',

    // Footer
    footer_rights: 'All rights reserved',
  },
};
