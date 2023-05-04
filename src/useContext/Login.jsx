import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const CurrentUserContext = createContext(null);
function Login() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Form></Form>
      </CurrentUserContext.Provider>
    </div>
  );
}

function Form({ children }) {
  return (
    <>
      <Panel title="Seize the time">
        <LoginButton></LoginButton>
      </Panel>
    </>
  );
}

function Panel({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function LoginButton() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  if (currentUser !== null) {
    return <h3>WelCome , {currentUser.name}</h3>;
  }

  return (
    <Button onClick={() => setCurrentUser({ name: 'jack' })}>点击登录</Button>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Login;
