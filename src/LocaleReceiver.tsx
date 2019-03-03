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

export default class LocaleReceiver<T = any> extends React.Component<LocaleReceiverProps<T>, any> {
  static contextType = LocaleContext;
  context: LocaleContextInterface<T>;

  constructor(props) {
    super(props);
  }

  getLocale = () => {
    return this.context.locale;
  }

  public render() {
    return this.props.children(this.getLocale());
  }
}
