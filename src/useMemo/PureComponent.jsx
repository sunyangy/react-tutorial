import React from 'react';

function PureComponent() {
  const [number, setNumber] = React.useState(0);
  const rNumber = () => {
    console.log('render');
    return number;
  };
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h3>{rNumber()}</h3>
    </div>
  );
}

export default React.memo(PureComponent);
