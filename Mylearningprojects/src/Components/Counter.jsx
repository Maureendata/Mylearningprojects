import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  function increment() {
    setCount(count + incrementBy);
  }
  function decrement() {
    setCount(count - incrementBy);
  }
  function incrementNumber() {
    setIncrementBy(incrementBy + 1);
  }
  function decrementNumber() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <h1>The counter number is {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1>The increment number is {incrementBy}</h1>
      <button onClick={incrementNumber}>Increase increment</button>
      <button onClick={decrementNumber}>Decrease increment</button>
    </div>
  );
}
