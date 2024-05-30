import { Spinner as FlowbiteSpinner } from 'flowbite-react';

import { SpinnerProps } from '../../@types';
import { spinnerSizes } from '../../constants';

export function Spinner(props: SpinnerProps) {
  const { size = 'medium' } = props;

  return (
    <FlowbiteSpinner
      aria-label='Loading...'
      color='primary'
      size={spinnerSizes[size]}
    />
  );
}
