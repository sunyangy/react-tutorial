import React, { createContext, useContext } from 'react';
const NationContext = createContext();
function Start() {
  return (
    <div>
      <NationContext.Provider value="finland">
        <Parent></Parent>
      </NationContext.Provider>
    </div>
  );
}

function Parent() {
  return (
    <>
      <Children></Children>
    </>
  );
}

function Children() {
  return (
    <>
      <Grandson></Grandson>
    </>
  );
}

function Grandson() {
  const nation = useContext(NationContext);
  return (
    <>
      <h2>I will go to the {nation}</h2>
    </>
  );
}

export default Start;
