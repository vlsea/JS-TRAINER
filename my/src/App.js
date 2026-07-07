import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>Счётчик</h1>
      <h2>{count}</h2>

      <div className="buttons">
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <button onClick={() => setCount(0)}>Сброс</button>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
