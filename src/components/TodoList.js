import React from "react";
import TodoItems from "./TodoItems";

function TodoList({ todos }) {
  return (
    <div className="todoList">
      {todos.map((todo) => (
        <TodoItems key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
