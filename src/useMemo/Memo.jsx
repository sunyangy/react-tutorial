import React, { useEffect } from 'react';
import PureComponent from './PureComponent';
export default function Memo() {
  // const [number, setNumber] = React.useState(0);

  const [time, setTime] = React.useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  // 由于Memo中，time数据一直更新，回导致整个组件重新更新，为了减轻性能我们需要使用useMemo来缓存数据，让没有改变的数据不会更新
  // const rNumber = () => {
  //   console.log('render');
  //   return number;
  // };

  // 缓存数据
  // const cacheNumber = React.useMemo(() => {
  //   return rNumber();
  // }, [number]);

  return (
    <div>
      <h2>{time.getSeconds()}</h2>
      {/* <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h3>{cacheNumber}</h3> */}
      <PureComponent></PureComponent>
    </div>
  );
}
