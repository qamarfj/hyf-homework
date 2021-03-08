import TodosList from "./TodosList";
import { useEffect, useState } from "react";
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

  function AddTodo(e) {
    setCurrentTodos((prev) => [
      ...prev,
      {
        id: currentTodos.length + 1,
        description: description,
        deadline: deadline,
      },
    ]);
    setDescription("");
    setDeadline("");

    e.preventDefault();
  }
  const DeleteTodo = (id) => {
    const todos = [...currentTodos];
    setCurrentTodos(todos.filter((todo) => todo.id !== id));
  };
  const UpdateTodo = (id, description) => {
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
    const currentDate = "" + now.getFullYear() + "-" + month + "-" + day;
    return currentDate;
  }

  return (
    <div>
      <form onSubmit={AddTodo}>
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
          DeleteTodo={DeleteTodo}
          UpdateTodo={UpdateTodo}
        />
      ) : (
        <h2>Loading.....</h2>
      )}
    </div>
  );
}
