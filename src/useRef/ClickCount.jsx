import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

export default function ClickCount() {
  const ref = useRef(0);
  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log(ref.current);
  };

  useEffect(() => {
    console.log('render');
  }, []);
  return (
    <>
      <button onClick={handleClick}>计数</button>
    </>
  );
}
