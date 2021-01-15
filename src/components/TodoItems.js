import React from "react";
import { Button, Checkbox } from "antd";

function TodoItems({ todo }) {
  const { text, isCheck } = todo;

  return (
    <div className="todoItems">
      <Checkbox checked={isCheck}>{text}</Checkbox>
      <Button
        style={{
          width: "85.5px",
          position: "absolute",
          right: "0",
          height: "50px",
        }}
      >
        삭제
      </Button>
    </div>
  );
}

export default TodoItems;
