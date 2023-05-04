import React, { useReducer } from 'react';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + 1,
      };
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return { number: state.number };
  }
};
function CalculateNumber() {
  const [state, dispatch] = useReducer(reducer, { number: 0 });
  return (
    <>
      <h2>{state.number}</h2>
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
    </>
  );
}

export default CalculateNumber;
