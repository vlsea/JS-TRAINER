import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const [showModal, setShowModal] = useState(false);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return {
    count,
    increment,
    decrement,
    reset,
    showModal,
    openModal,
    closeModal,
  };
}
