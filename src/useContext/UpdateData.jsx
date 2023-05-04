/**
 * useContext和useState结合使用
 */

import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import './style.css';
export const ThemeContext = createContext(null);

function UpdateData() {
  const [theme, setTheme] = useState('light');
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Form></Form>
        <label htmlFor="">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          />
          切换主题
        </label>
      </ThemeContext.Provider>
    </div>
  );
}

function Form({ children }) {
  return (
    <>
      <Panel title="WelCome">
        <Button>登录</Button>
        <Button>退出</Button>
      </Panel>
    </>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <>
      <section className={className}>
        <h2>{title}</h2>
        {children}
      </section>
    </>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return <button className={className}>{children}</button>;
}

export default UpdateData;
