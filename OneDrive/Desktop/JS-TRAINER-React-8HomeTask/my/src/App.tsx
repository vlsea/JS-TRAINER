import "./App.css";
import { useState, ChangeEvent } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div className="todo-app">
      <h1>Todo List TypeScript</h1>

      <div className="todo-form">
        <input
          type="text"
          placeholder="Введите задачу"
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={addTodo}>Добавить</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "done" : ""}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
