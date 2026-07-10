// Proyectos destacados. Reemplaza imágenes/links cuando estén listos.
export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;       // ruta en /public (ej. '/projects/kpis.svg') — opcional
  github?: string;      // URL repo — opcional
  demo?: string;        // URL demo — opcional
  accent?: string;      // emoji/inicial para el placeholder visual
};

export const projects: Project[] = [
  {
    title: 'Dashboard de KPIs Operativos',
    description:
      'Plataforma que unifica los indicadores clave de la operación en un solo lugar. Migré los indicadores (reportes) desde Power BI a un proyecto sobre Claude, eliminando las fuentes externas que dependían de actualización manual para trabajar con una única fuente de datos confiable. Este dashboard integra diferentes reportes como el Módulo de Horas, WIP, Controles WIP, Facturación y Proyección.',
    tags: ['Claude', 'Power BI', 'SQL', 'KPIs'],
    image: 'projects/bision-lens.png',
  },
  {
    title: 'Automatización de Reportes',
    description:
      'Automatización de procesos en el área de Operaciones, como el envío de reportes automáticos por correo. Reemplaza la consolidación y el envío manual por un flujo programado y confiable.',
    tags: ['Claude', 'Python', 'FinOps'],
    image: 'projects/automatizacion-reportes.svg',
  },
  {
    title: 'Agente de Reporte de Horas',
    description:
      'Agente que envía un reporte semanal de las horas imputadas por cada colaborador, con semáforo de cumplimiento (oportuno / no oportuno) y alertas automáticas.',
    tags: ['Claude', 'Python', 'SQL'],
    image: 'projects/control-horas.svg',
  },
];
