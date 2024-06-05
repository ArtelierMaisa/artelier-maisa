export type MetricVariant = 'weight' | 'size' | 'material';

export interface MetricProps {
  value: string;
  variant?: MetricVariant;
}
