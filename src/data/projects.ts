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
      'Tablero analítico que centraliza indicadores de operación en tiempo real, reemplazando reportes manuales por una vista única con drill-down por equipo y proyecto.',
    tags: ['Claude', 'Python', 'SQL', 'KPIs'],
    accent: 'KPI',
  },
  {
    title: 'Automatización de Reportes',
    description:
      'Automatización de procesos en el área de Operaciones, como el envío de reportes automáticos por correo. Reemplaza la consolidación y el envío manual por un flujo programado y confiable.',
    tags: ['Claude', 'Python', 'FinOps'],
    accent: 'AUTO',
  },
  {
    title: 'Sistema de Control de Horas',
    description:
      'Agente que envía un reporte semanal de las horas imputadas por cada colaborador, con semáforo de cumplimiento (oportuno / no oportuno) y alertas automáticas.',
    tags: ['Claude', 'Python', 'SQL'],
    accent: 'HRS',
  },
  {
    title: 'Asistente IA para Operaciones',
    description:
      'Agente de IA que asiste el análisis operativo: responde preguntas sobre los datos, detecta anomalías y sugiere acciones sobre los procesos.',
    tags: ['Claude', 'AI Agents', 'Prompt Engineering'],
    accent: 'AI',
  },
];
