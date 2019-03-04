import { useContext } from 'react';
import { LocaleContext } from './LocaleReceiver';

export default function useLocale<T = any>() {
  const context = useContext(LocaleContext);

  return context.locale as T;
}
