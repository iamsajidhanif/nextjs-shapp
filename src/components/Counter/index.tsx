
import { useState, useEffect } from "react";

const Counter = () => {
  let [count, setCount] = useState<number>(0);

// useEffect Hook (State and Lifecycle)
// ====================================  
// useEffect (Example 1)
  useEffect(() => {
    console.log("useEffet Example 1: any update / runs in each lifecycle")
  })

// useEffect (Example 2)
  useEffect(() => {
    console.log("useEffet Example 2: mount/ componentDidMount")
  }, [])

// useEffect (Example 3)
  useEffect(() => {
    console.log("useEffect Example 3: count update/ componentDidUpdate", count)
  }, [count])

// useEffect (Example 4)
  useEffect(() => {
    return () => console.log("useEffet Example 4: data update or unmount/ componentWillUnmount")
  }, [count])

    let incrementCount = (): void => {
    setCount(count + 1);
  };

  let decrementCount = (): void => {
    setCount(!count? 0 : count - 1); // won't count below zero
  };

  let resetCount = () => {
    setCount(count = 0);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <br />
      <button onClick={incrementCount}><h3>Increment (+)</h3></button>&nbsp;&nbsp;
      <button onClick={decrementCount}><h3>Decrement (-)</h3></button>&nbsp;&nbsp;
      <button onClick={resetCount}><h3>Reset</h3></button>
    </>
  );
};

// const Counter = () => {
//   let [count, setCount] = useState<number>(0);

//   let incrementCount = (): void => {
//     setCount(count + 1);
//   };

//   let decrementCount = (): void => {
//     setCount(!count? 0 : count - 1); // won't count below zero
//   };

//   let resetCount = () => {
//     setCount(count = 0);
//   }

//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <br />
//       <button onClick={incrementCount}><h2>Increment</h2></button><br /><br />
//       <button onClick={decrementCount}><h2>Decrement</h2></button><br /><br />
//       <button onClick={resetCount}><h2>Reset</h2></button>
//     </>
//   );
// };

export default Counter;
