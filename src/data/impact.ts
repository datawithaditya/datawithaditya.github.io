export type ImpactMetric = {
  value: string;   // main number ("70")
  suffix?: string; // e.g. "%", "+" — rendered in accent colour
  label: string;
};

export const impact: ImpactMetric[] = [
  { value: '70', suffix: '%', label: 'Auto-approval rate' },
  { value: '500', suffix: '+', label: 'SKUs / day' },
  { value: '30', suffix: '%', label: 'HR time saved' },
  { value: '100', suffix: '+', label: 'Employees on portal' },
  { value: '1K', suffix: '+', label: 'Videos generated' },
  { value: '11', label: 'Systems shipped' },
];
