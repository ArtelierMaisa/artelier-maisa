import { Spinner as FlowbiteSpinner } from 'flowbite-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { SpinnerProps } from '../../@types';
import { spinnerSizes } from '../../constants';

function Spinner(props: SpinnerProps) {
  const { size = 'medium', color = 'primary' } = props;

  const { t } = useTranslation();

  return (
    <FlowbiteSpinner
      aria-label={t('spinner.loading')}
      color={color}
      size={spinnerSizes[size]}
    />
  );
}

export default memo(Spinner);
