import React from 'react';
import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_name': {
      return {
        name: action.payload,
        age: state.age,
      };
    }
    case 'increment_age': {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    default:
      return state;
  }
};

const initState = { name: 'fin', age: 18 };

function TwoReducer() {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleChangeName = (e) => {
    dispatch({ type: 'change_name', payload: e.target.value });
  };

  const handleIncrementAge = () => {
    dispatch({ type: 'increment_age' });
  };

  return (
    <>
      <input type="text" value={state.name} onChange={handleChangeName} />
      <button onClick={handleIncrementAge}>change age</button>
      <h2>
        I'm {state.name}, my age is {state.age}
      </h2>
    </>
  );
}

export default TwoReducer;
