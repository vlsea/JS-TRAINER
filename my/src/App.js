import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <h1>Счётчик</h1>
      <h2>{count}</h2>

      <div className="buttons">
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Сброс</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>О проекте</h1>
      <p>Это простое SPA-приложение на React с маршрутизацией.</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/">Главная</Link>
        <Link to="/about">О проекте</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
