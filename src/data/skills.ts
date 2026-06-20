// Skills agrupadas por categoría. Sin porcentajes — solo dominio por áreas.
export type SkillGroup = {
  title: string;
  icon: string; // nombre del ícono en Icon.astro
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: 'Data',
    icon: 'database',
    items: ['SQL', 'MySQL', 'Excel', 'MongoDB'],
  },
  {
    title: 'Development',
    icon: 'code',
    items: ['Python', 'JavaScript', 'Git', 'GitHub', 'API REST', 'Scrum'],
  },
  {
    title: 'AI & Automation',
    icon: 'sparkles',
    items: ['Claude', 'ChatGPT', 'Prompt Engineering', 'AI Agents', 'Workflow Automation'],
  },
  {
    title: 'Operations',
    icon: 'gauge',
    items: ['FinOps', 'KPIs', 'Reporting', 'Seguimiento', 'Process Optimization'],
  },
];
