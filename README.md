# locale-provider

## Introduction

国际化

## Installation

```bash
npm install @epig/locale-provider --save
```

## Usage

```typescript
import * as React from 'react';
import LocaleProvider, { LocaleReceiver as LR } from '@epig/locale-provider';

interface Locale {
  loginBtnText: string;
  registerBtnText: string;
}

class LocaleReceiver extends LR<Locale> {}

const defaultLocale: Locale = {
  loginBtnText: '登陆',
  registerBtnText: '注册',
};

class Login extends React.Component<any, any> {
  render() {
    return (
      <LocaleReceiver>
        {locale => (
          <div>
            <p>{locale.loginBtnText}</p>
          </div>
        )}
      </LocaleReceiver>
    );
  }
}

class App extends React.Component<any, any> {
  render() {
    return (
      <LocaleProvider locale={defaultLocale}>
        <Login />
      </LocaleProvider>
    );
  }
}
```

## Api

### LocaleProvider

| props        | type         | default | description                 | required |
|--------------|--------------|---------|-----------------------------|----------|
| locale | any | - | 语言包配置 | true |

### LocaleReceiver

| props        | type         | default | description                 | required |
|--------------|--------------|---------|-----------------------------|----------|
| children | (locale: any) => React.ReactNode | - | 子组件 | true |