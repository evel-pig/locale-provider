import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { configure, mount } from 'enzyme';
import LocaleProvider, { LocaleReceiver, useLocale } from '../index';

configure({ adapter: new Adapter() });

interface Locale {
  loginBtnText: string;
  registerBtnText: string;
}

class MyLocaleReceiver extends LocaleReceiver<Locale> {}

class App extends React.Component<any, any> {
  render() {
    return (
      <MyLocaleReceiver>
        {locale => (
          <div>
            <button id="loginBtn">{locale.loginBtnText}</button>
            <button id="registerBtn">{locale.registerBtnText}</button>
          </div>
        )}
      </MyLocaleReceiver>
    );
  }
}

const defaultLocale: Locale = {
  loginBtnText: '登陆',
  registerBtnText: '注册',
};

const usLocale: Locale = {
  loginBtnText: 'login',
  registerBtnText: 'register',
};

const Root = (props) => {
  return (
    <LocaleProvider locale={props.locale || defaultLocale}>
      {props.children}
    </LocaleProvider>
  );
};

describe('locale-provider', () => {
  it('get locale success', () => {
    const root = <Root><App /></Root>;

    const wrapper = mount(root);
    expect(wrapper.find('#loginBtn').text()).toBe(defaultLocale.loginBtnText);
    expect(wrapper.find('#registerBtn').text()).toBe(defaultLocale.registerBtnText);
  });

  it('change locale', () => {
    const root = <Root><App /></Root>;

    const wrapper = mount(root);
    expect(wrapper.find('#loginBtn').text()).toBe(defaultLocale.loginBtnText);
    expect(wrapper.find('#registerBtn').text()).toBe(defaultLocale.registerBtnText);

    wrapper.setProps({ locale: usLocale });
    expect(wrapper.find('#loginBtn').text()).toBe(usLocale.loginBtnText);
    expect(wrapper.find('#registerBtn').text()).toBe(usLocale.registerBtnText);
  });

  it('usLocale hook', () => {
    function FApp() {
      const locale = useLocale<Locale>();

      return (
        <div>
          <button id="loginBtn">{locale.loginBtnText}</button>
          <button id="registerBtn">{locale.registerBtnText}</button>
        </div>
      );
    }

    const root = <Root><FApp /></Root>;

    const wrapper = mount(root);
    expect(wrapper.find('#loginBtn').text()).toBe(defaultLocale.loginBtnText);
    expect(wrapper.find('#registerBtn').text()).toBe(defaultLocale.registerBtnText);
  });
});
