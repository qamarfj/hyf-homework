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
        done: false,
      },
    ]);
  }
  const DeleteTodo = (id) => {
    const todos = [...currentTodos];
    setCurrentTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleDone = (id) => {
    const todos = [...currentTodos];
    setCurrentTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.done = !todo.done;
        return todo;
      })
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDoList</h1>
      </header>
      <Timer />
      <button onClick={AddTodo}>Add Todo</button>
      <TodosList
        todos={currentTodos}
        DeleteTodo={DeleteTodo}
        toggleDone={toggleDone}
      />
    </div>
  );
}

export default App;
