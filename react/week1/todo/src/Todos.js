import React from "react";
import { ToDo } from "./ToDo";
import todosList from "./TodoList";

export const Todos = () => {
  return (
    <div>
      <ul>
        {todosList.map((todo) => (
          <ToDo title={todo.title} deadLine={todo.deadLine} />
        ))}
      </ul>
    </div>
  );
};
