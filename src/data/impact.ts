// Métricas de impacto. Ajusta los valores cuando tengas cifras finales.
export type Metric = {
  value: number;
  suffix?: string;
  label: string;
};

export const impact: Metric[] = [
  { value: 12, suffix: '+', label: 'Procesos automatizados' },
  { value: 8, suffix: '+', label: 'Dashboards creados' },
  { value: 8, suffix: '+', label: 'Reportes optimizados' },
  { value: 8, suffix: '+', label: 'Indicadores implementados' },
  { value: 60, suffix: '%', label: 'Ahorro de tiempo operativo' },
];
