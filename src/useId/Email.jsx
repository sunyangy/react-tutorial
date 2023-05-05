import React from 'react';
import { useRef } from 'react';
import { useId } from 'react';

export default function Email() {
  const id = useId();

  return (
    <>
      <label htmlFor={id} style={{ display: 'inline' }}>
        Email
      </label>
      <input id={id} type="email" />
    </>
  );
}
