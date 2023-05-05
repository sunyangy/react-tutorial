import React from 'react';
import { useTransition } from 'react';
import { useState } from 'react';

export default function Transition() {
  const [isPending, startTransition] = useTransition();
  console.log(isPending);
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      let l = [];
      for (let i = 0; i < 20000; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };
  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? (
        <h2>loading...</h2>
      ) : (
        list.map((item, index) => {
          return <div key={index}>{item}</div>;
        })
      )}
    </>
  );
}
