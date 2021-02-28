function TodoItem({ todo, DeleteTodo }) {
  return (
    <li>
      {todo.description}
      <input type="checkbox" />
      <button
        onClick={() => {
          DeleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default function TodosList({ todos, DeleteTodo }) {
  if (todos.length > 0)
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} DeleteTodo={DeleteTodo} />
        ))}
      </ul>
    );
  else return <div> No Items</div>;
}
