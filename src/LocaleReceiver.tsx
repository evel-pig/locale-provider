import * as React from 'react';

export interface LocaleReceiverProps<T> {
  children: (locale: T) => React.ReactNode;
}

export interface LocaleContextInterface<T> {
  locale: T;
}

export const LocaleContext = React.createContext<LocaleContextInterface<any>>({
  locale: {},
});

export default function LocaleReceiver<T = any>(props: LocaleReceiverProps<T>) {
  return (
    <LocaleContext.Consumer>
      {({ locale }) => props.children(locale)}
    </LocaleContext.Consumer>
  );
}
