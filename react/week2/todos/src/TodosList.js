function TodoItem({ todo, DeleteTodo, toggleDone }) {
  return (
    <li className={todo.done ? "done" : "notdone"}>
      {todo.description}
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleDone(todo.id)}
      />
      <button onClick={() => DeleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default function TodosList({ todos, DeleteTodo, toggleDone }) {
  if (todos.length > 0)
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            DeleteTodo={DeleteTodo}
            toggleDone={toggleDone}
          />
        ))}
      </ul>
    );
  else return <div> No Items</div>;
}
