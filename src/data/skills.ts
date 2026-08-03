export type Skill = {
  icon: string; // emoji or unicode glyph
  name: string;
  tags: string[];
};

export const skills: Skill[] = [
  {
    icon: '⚙️',
    name: 'Product & Platform',
    tags: ['Workflow Analysis', 'Decision Automation', 'KPI Design', 'Internal Tooling'],
  },
  {
    icon: '🐍',
    name: 'Programming',
    tags: ['Python', 'pandas', 'Flask', 'FastAPI', 'ETL Pipelines', 'Automation'],
  },
  {
    icon: '🗄️',
    name: 'Data & SQL',
    tags: ['SQL Server', 'PostgreSQL', 'Stored Procs', 'Azure SQL', 'DB Design'],
  },
  {
    icon: '📊',
    name: 'Analytics & BI',
    tags: ['Power BI', 'DAX', 'SSRS', 'Excel / VBA'],
  },
  {
    icon: '🔧',
    name: 'Engineering',
    tags: ['Data Modeling', 'JSON Schema', 'PythonAnywhere', 'Self-Service'],
  },
  {
    icon: '🎓',
    name: 'Pursuing',
    tags: ['M.Sc. Data Science', 'ML Fundamentals', 'LLM Systems'],
  },
];
