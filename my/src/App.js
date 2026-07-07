import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./todoSlice";

function App() {
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  return (
    <div className="todo-app">
      <h1>Мой Todo List</h1>

      <div className="todo-form">
        <input
          type="text"
          placeholder="Введите задачу"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd}>Добавить</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "done" : ""}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
