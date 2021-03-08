import { useState } from "react";

function TodoItem({ todo, DeleteTodo, UpdateTodo }) {
  const [isCheked, setIsCheked] = useState(false);
  const [isUpdated, setIsUpdated] = useState(true);
  const [todoDescription, settodoDescription] = useState(todo.description);
  const updateDescription = (e) => {
    settodoDescription(e.target.value);
  };
  return (
    <li className={isCheked ? "Done" : "notDone"}>
      {isUpdated && (
        <>
          {todo.description} | {todo.deadline}
        </>
      )}

      <>
        {!isUpdated && (
          <input
            type="text"
            value={todoDescription}
            onChange={updateDescription}
            required
          />
        )}
      </>
      <input
        type="checkbox"
        checked={isCheked}
        onChange={() => setIsCheked(!isCheked)}
      />
      <button onClick={() => DeleteTodo(todo.id)}>Delete</button>
      {isUpdated && (
        <button onClick={() => setIsUpdated(!isUpdated)}>Edit</button>
      )}
      {!isUpdated && (
        <button
          disabled={!todoDescription}
          onClick={() => {
            setIsUpdated(!isUpdated);
            UpdateTodo(todo.id, todoDescription);
          }}
        >
          Update
        </button>
      )}
    </li>
  );
}

export default function TodosList({ todos, DeleteTodo, UpdateTodo }) {
  return (
    <>
      {todos.length > 0 && (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              DeleteTodo={DeleteTodo}
              UpdateTodo={UpdateTodo}
            />
          ))}
        </ul>
      )}
      {todos.length < 1 && <div> No Items</div>}
    </>
  );
}
