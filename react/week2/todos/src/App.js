import { useState } from "react";
import "./App.css";
import { Timer } from "./Timer";
import { todos } from "./todos";
import TodosList from "./TodosList";

function App() {
  const [currentTodos, setCurrentTodos] = useState(todos);

  function AddTodo() {
    setCurrentTodos((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 1000),
        description: "random Texet",
      },
    ]);
  }
  const DeleteTodo = (id) => {
    const todos = [...currentTodos];
    setCurrentTodos(todos.filter((todo) => todo.id != id));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDoList</h1>
      </header>
      <Timer />
      <button onClick={AddTodo}>Add Todo</button>
      <TodosList todos={currentTodos} DeleteTodo={DeleteTodo} />
    </div>
  );
}

export default App;
