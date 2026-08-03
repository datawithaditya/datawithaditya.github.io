// Timeline block metadata. Each project's `company` frontmatter references one of these by id.
// Ordering here controls timeline order top-to-bottom (most recent first).

export type Company = {
  id: 'dh' | 'synchem' | 'personal';
  name: string;
  role: string;
  dateRange: string; // rendered on the left of each block, use <br> via \n
  colour: 'red' | 'blue' | 'teal';
};

export const companies: Company[] = [
  {
    id: 'dh',
    name: 'D&H Sécheron Pvt. Ltd.',
    role: 'Product Analyst (Platform) · Business Systems & Analytics',
    dateRange: 'Oct 2025\nPresent',
    colour: 'red',
  },
  {
    id: 'synchem',
    name: 'Synchem Pharmaceuticals',
    role: 'Analytics Engineer · Data Analyst (Internal Systems)',
    dateRange: 'Aug 2023\nOct 2025',
    colour: 'blue',
  },
  {
    id: 'personal',
    name: 'Personal Projects',
    role: 'Independent · Side Projects · SaaS',
    dateRange: '2022\nOngoing',
    colour: 'teal',
  },
];
