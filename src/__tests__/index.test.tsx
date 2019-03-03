import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { configure, mount } from 'enzyme';
import LocaleProvider, { LocaleReceiver } from '../index';

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

const getRoot = () => {
  return (
    <LocaleProvider locale={defaultLocale}>
      <App />
    </LocaleProvider>
  );
};

describe('locale-provider', () => {
  it('get locale success', () => {
    const root = getRoot();

    const wrapper = mount(root);
    expect(wrapper.find('#loginBtn').text()).toBe(defaultLocale.loginBtnText);
    expect(wrapper.find('#registerBtn').text()).toBe(defaultLocale.registerBtnText);
  });

  it('change locale', () => {
    const root = getRoot();

    const wrapper = mount(root);
    expect(wrapper.find('#loginBtn').text()).toBe(defaultLocale.loginBtnText);
    expect(wrapper.find('#registerBtn').text()).toBe(defaultLocale.registerBtnText);

    wrapper.setProps({ locale: usLocale });
    expect(wrapper.find('#loginBtn').text()).toBe(usLocale.loginBtnText);
    expect(wrapper.find('#registerBtn').text()).toBe(usLocale.registerBtnText);
  });
});
