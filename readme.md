# react tutorial

## useMemo

**提高页面性能，用来缓存数据，通常作用于对象，或者数组**

你可以使用 useMemo 或者使用 React.memo将一个组件变成纯组件

```react
import React, { useEffect } from 'react';

export default function Memo() {
  const [number, setNumber] = React.useState(0);

  const [time, setTime] = React.useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  // 由于Memo中，time数据一直更新，回导致整个组件重新更新，为了减轻性能我们需要使用useMemo来缓存数据，让没有改变的数据不会更新, 也可以使用纯组件
  const rNumber = () => {
    console.log('render');
    return number;
  };

  // 缓存数据
  const cacheNumber = React.useMemo(() => {
    return rNumber();
  }, [number]);

  return (
    <div>
      <h2>{time.getSeconds()}</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h3>{cacheNumber}</h3>
    </div>
  );
}

```

```react
// 纯组件
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
```

## useCallback

主要针对于函数

useCallBack的本质工作不是在依赖不变的情况下阻止函数创建，而是在依赖不变的情况下不返回新的函数地址而返回旧的函数地址。不论是否使用useCallBack都无法阻止组件render(呈现) 时函数的重新创建！

我们只需要使用useCallBack保护一下父组件中传入子组件的那个函数（toChildFun函数）**保证它不会在没有必要的情况下返回一个新的内存地址就好了。**

```jsx
import {useCallBack,memo} from 'react';
/**父组件**/
const Parent = () => {
    const [parentState,setParentState] = useState(0);  //父组件的state
    
    //需要传入子组件的函数
    //只有这里和上一个示例不一样！！
    //只有这里和上一个示例不一样！！
    //只有这里和上一个示例不一样！！
    //只有这里和上一个示例不一样！！
    //只有这里和上一个示例不一样！！
    //只有这里和上一个示例不一样！！
    const toChildFun = useCallBack(() => {
        console.log("需要传入子组件的函数");
        ...
    },[])
    
    return (<div>
          <Button onClick={() => setParentState(val => val+1)}>
              点击我改变父组件中与Child组件无关的state
          </Button>
          //将父组件的函数传入子组件
          <Child fun={toChildFun}></Child>
    <div>)
}

/**被memo保护的子组件**/
const Child = memo(() => {
    consolo.log("我被打印了就说明子组件重新构建了")
    return <div><div>
})


```

[掘金文章 ]: https://juejin.cn/post/7107943235099557896#comment



## useContext

目的是为了解决 props drilling	

`useContext()` 总是在调用它的组件 **上面** 寻找最近的 provider。它向上搜索， **不考虑** 调用 `useContext()` 的组件中的 provider。

基础用法

```react
import React, { createContext, useContext } from 'react';
const NationContext = createContext();
function Start() {
  return (
    <div>
      <NationContext.Provider value="finland">
        <Parent></Parent>
      </NationContext.Provider>
    </div>
  );
}

function Parent() {
  return (
    <>
      <Children></Children>
    </>
  );
}

function Children() {
  return (
    <>
      <Grandson></Grandson>
    </>
  );
}

function Grandson() {
  const nation = useContext(NationContext);
  return (
    <>
      <h2>I will go to the {nation}</h2>
    </>
  );
}

export default Start;
```



## useReducer

允许你更新状态

注意：state只是可读的，不应该

```react
import React, { useReducer } from 'react';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + 1 };
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
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

```

