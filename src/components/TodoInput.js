import React from "react";
import { SiVisualstudiocode } from "react-icons/si";

function TodoInput({ onChange, onSubmit, text, children }) {
  return (
    <div>
      <div className="head">{children}</div>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>
          <SiVisualstudiocode />
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
