import React from "react";

export const Todo = ({ title, deadLine }) => {
  return (
    <li>
      <h3> {title}</h3>
      {deadLine}
    </li>
  );
};
