import { useState } from "React";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrement] = useState(1);
  function Increment() {
    setCount(count + incrementBy);
  }
  function Decrement() {
    setCount(count - incrementBy);
  }
  function increaseIncrement() {
    setIncrement(incrementBy + 1);
  }
  function decreaseIncrement() {
    setIncrement(incrementBy - 1);
  }
  return (
    <div>
      <h1>The counter value is {count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <h1>The increment value is {incrementBy}</h1>
      <button onClick={increaseIncrement}>Increase increment</button>
      <button onClick={decreaseIncrement}>Decrease increment</button>
    </div>
  );
}
