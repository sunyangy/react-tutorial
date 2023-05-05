import React from 'react';
import { useState } from 'react';
import List from './List';
function Debouse() {
  const [value, setValue] = useState('');

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <List value={value}></List>
    </>
  );
}

export default Debouse;
