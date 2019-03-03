import * as React from 'react';
import { LocaleContext } from './LocaleReceiver';
export { LocaleContext, LocaleContextInterface } from './LocaleReceiver';
export { default as LocaleReceiver } from './LocaleReceiver';

export interface LocaleProviderProps {
  locale: any;
  children?: React.ReactNode;
}

export default class LocaleProvider extends React.Component<LocaleProviderProps, any> {
  render() {
    return (
      <LocaleContext.Provider value={{ locale: this.props.locale }}>
        {React.Children.only(this.props.children)}
      </LocaleContext.Provider>
    );
  }
}
