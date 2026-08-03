export type Education = {
  degree: string;
  institution: string;
  years: string; // e.g. "Apr 2025 → Jan 2027 · Pursuing"
};

export const education: Education[] = [
  {
    degree: 'M.Sc. Data Science',
    institution: 'Woolf University',
    years: 'Apr 2025 → Jan 2027 · Pursuing',
  },
  {
    degree: 'Advanced Certification — AI & ML',
    institution: 'IIIT Bangalore',
    years: 'Jun 2022 → Jan 2023',
  },
  {
    degree: 'Certification in Data Science',
    institution: 'InternShala',
    years: 'Jan 2023 → May 2023',
  },
  {
    degree: 'B.Tech — Electronics & Communication',
    institution: 'Rajasthan Technical University',
    years: 'Aug 2016 → Sep 2020',
  },
];
