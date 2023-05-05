import React from 'react';
import { useState, useRef } from 'react';

export default function GetDom() {
  const [input, setInput] = useState('');
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>my name is {input}</div>
      <button onClick={handleFocus}>聚焦</button>
    </>
  );
}
