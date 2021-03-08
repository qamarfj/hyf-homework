import React, { useState } from "react";
import Border from "./Border";
import PropTypes from "prop-types";

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
            <Border key={todo.id}>
              <TodoItem
                todo={todo}
                DeleteTodo={DeleteTodo}
                UpdateTodo={UpdateTodo}
              />
            </Border>
          ))}
        </ul>
      )}
      {todos.length < 1 && <div> No Items</div>}
    </>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  DeleteTodo: PropTypes.func,
  UpdateTodo: PropTypes.func,
};
