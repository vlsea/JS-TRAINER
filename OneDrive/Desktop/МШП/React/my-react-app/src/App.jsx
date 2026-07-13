import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Счетчик</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)} style={{ margin: "0 10px" }}>
        Сброс
      </button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;