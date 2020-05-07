import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(10);
  const [{ count2, count3 }, setCount23] = useState({ count2: 15, count3: 30 });

  return (
    <div>
      <h1>count</h1>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <div>count: {count}</div>
      <hr />
      <h1>count 2,3</h1>
      <div>count2: {count2}</div>
      <div>count3: {count3}</div>
      <button
        onClick={() =>
          setCount23((currentState) => ({
            ...currentState,
            count2: currentState.count2 + 1,
          }))
        }
      >
        increment count2
      </button>
      <button
        onClick={() =>
          setCount23((currentState) => ({
            ...currentState,
            count3: currentState.count3 + 1,
          }))
        }
      >
        increment count3
      </button>
    </div>
  );
};

export default App;
