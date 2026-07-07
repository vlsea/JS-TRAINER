import "./App.css";
import { createPortal } from "react-dom";
import { useCounter } from "./useCounter";

function CounterDisplay({ count }) {
  return <h2>{count}</h2>;
}

function CounterButtons({ onDecrement, onReset, onIncrement, onOpenModal }) {
  return (
    <div className="buttons">
      <button onClick={onDecrement}>-</button>
      <button onClick={onReset}>Сброс</button>
      <button onClick={onIncrement}>+</button>
      <button onClick={onOpenModal}>Инфо</button>
    </div>
  );
}

function Modal({ show, onClose, count }) {
  if (!show) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <h3>Модальное окно</h3>
        <p>Текущее значение счётчика: {count}</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>,
    document.body,
  );
}

function App() {
  const {
    count,
    increment,
    decrement,
    reset,
    showModal,
    openModal,
    closeModal,
  } = useCounter(0);

  return (
    <div className="counter">
      <h1>Счётчик</h1>

      <CounterDisplay count={count} />

      <CounterButtons
        onDecrement={decrement}
        onReset={reset}
        onIncrement={increment}
        onOpenModal={openModal}
      />

      <Modal show={showModal} onClose={closeModal} count={count} />
    </div>
  );
}

export default App;
