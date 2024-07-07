import i18n, { InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { enUs, ptBr } from './locales';

const i18nConfig: InitOptions = {
  resources: { 'en-US': enUs, 'pt-BR': ptBr },
  fallbackLng: 'pt-BR',
  defaultNS: 'translations',
};

i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig);

export default i18n;
