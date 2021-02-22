import React from "react";

export const ToDo = ({ title, deadLine }) => {
  return (
    <li>
      <h3> {title}</h3>
      {deadLine}
    </li>
  );
};
