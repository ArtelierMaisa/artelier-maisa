export type MetricVariant = 'weight' | 'size' | 'material';

export interface MetricProps {
  value: string | null;
  variant?: MetricVariant;
}
