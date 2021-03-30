import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const style = {
    border: "1px solid teal",
    borderRadius: "8px",
    backgroundColor: "teal",
    padding: "4px 16px",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold"
  };
  return (
    <div>
      <p>{count}</p>
      <button style={style} onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};
