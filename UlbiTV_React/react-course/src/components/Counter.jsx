import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function multiply() {
    setCount(count * count);
  }
  return (
    <div>
		 <h1>{count}</h1>
      <button onClick={increment}>Добавить</button>
      <button onClick={decrement}>Удалить</button>
      <button onClick={multiply}>Возвести в степень</button>
    </div>
  );
};

export default Counter;
