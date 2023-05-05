import React from 'react';
import { useDeferredValue } from 'react';
import { useMemo } from 'react';

function List({ value }) {
  const LIST_SIZE = 20000;
  const deferredValue = useDeferredValue(value);
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredValue}</div>);
    }
    return l;
  }, [deferredValue]);
  return list;
}

export default List;
