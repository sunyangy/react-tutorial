import React, { useRef } from 'react';
import { forwardRef } from 'react';

export default function ExposingRef() {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <MyInput ref={inputRef}></MyInput>
      <button onClick={handleClick}>focus</button>
    </>
  );
}

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});
