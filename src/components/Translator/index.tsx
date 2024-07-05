import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { TranslatorProps } from '../../@types';

function Translator(props: TranslatorProps) {
  const { t } = useTranslation();

  const { path } = props;

  return t(path);
}

export default memo(Translator);
