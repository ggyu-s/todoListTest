import React, { useCallback, useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todotemplete() {
  const [text, setText] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const id = useRef(1);
  const [todos, setTodos] = useState([]);

  const onChange = useCallback((e) => {
    setText(e.currentTarget.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setTodos([
        ...todos,
        {
          id: id.current,
          text: text,
          isCheck: false,
        },
      ]);
      id.current++;
      setText("");
    },
    [text, todos]
  );

  return (
    <div className="section">
      <TodoInput onChange={onChange} onSubmit={onSubmit} text={text}>
        TodoList
      </TodoInput>
      <TodoList todos={todos} />
    </div>
  );
}

export default Todotemplete;
