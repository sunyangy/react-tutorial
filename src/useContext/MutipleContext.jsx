import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import './style.css';
const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);
function MutipleContext() {
  const [theme, setTheme] = useState('light');
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <WelComePanel></WelComePanel>
        <label htmlFor="">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          />
          切换主题
        </label>
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

function WelComePanel() {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <Panel title="seize the time">
        {currentUser !== null ? <Greeting></Greeting> : <LoginForm></LoginForm>}
      </Panel>
    </>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Greeting() {
  const { currentUser } = useContext(CurrentUserContext);
  return <h2>don't waste time , {currentUser.name}</h2>;
}

function LoginForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const canLogin = firstName !== '' && lastName !== '';
  const { setCurrentUser } = useContext(CurrentUserContext);
  return (
    <>
      <label htmlFor="firstName">
        First Name
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label htmlFor="lastName">
        Last Name
        <input
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>

      <Button
        disabled={!canLogin}
        onClick={() => setCurrentUser({ name: firstName + ' ' + lastName })}
      >
        登录
      </Button>
      {!canLogin && '请先填写字段才能登录'}
    </>
  );
}

function Button({ children, disabled, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default MutipleContext;
