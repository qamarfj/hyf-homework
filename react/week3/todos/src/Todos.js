import TodosList from "./TodosList";
import { useEffect, useState } from "react";
import { default as UUID } from "node-uuid";
const URL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

export default function Todos() {
  const [currentTodos, setCurrentTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    const fetchAPI = () => {
      fetch(URL)
        .then((response) => response.json())
        .then((todos) => {
          setIsLoaded((prev) => !prev);
          setCurrentTodos((prev) => prev.concat(todos));
        });
    };
    fetchAPI();
    return () => {
      setIsLoaded(() => {
        return false;
      });
    };
  }, []);

  function addTodo(e) {
    const currentTodo = {
      id: UUID.v4(),
      description: description,
      deadline: deadline,
    };
    setCurrentTodos((prev) => [...prev, currentTodo]);

    setDescription("");
    setDeadline("");

    e.preventDefault();
  }
  const deleteTodo = (id) => {
    const todos = [...currentTodos];
    setCurrentTodos(todos.filter((todo) => todo.id !== id));
  };
  const updateTodo = (id, description) => {
    const todos = [...currentTodos];
    setCurrentTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.description = description;
        }
        return todo;
      })
    );
  };
  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const updateDeadline = (e) => {
    setDeadline(e.target.value);
  };

  function minDate() {
    const now = new Date();
    const month =
      now.getMonth() > 9 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1);
    const day = now.getDate() > 9 ? now.getDate() : "0" + now.getDate();
    const currentDate = `${now.getFullYear()}-${month}-${day}`;

    return currentDate;
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <label htmlFor="description">Todo Description : </label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={updateDescription}
          required
        />
        <label htmlFor="deadline">Deadline : </label>
        <input
          type="date"
          name="deadline"
          id="deadline"
          value={deadline}
          onChange={updateDeadline}
          min={minDate()}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      {isLoaded ? (
        <TodosList
          todos={currentTodos}
          DeleteTodo={deleteTodo}
          UpdateTodo={updateTodo}
        />
      ) : (
        <h2>Loading.....</h2>
      )}
    </div>
  );
}
