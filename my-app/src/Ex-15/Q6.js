import React, { useState } from "react";

function Q6(){
    const [count, setCount] = useState(0);
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Question-6</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
};

export default Q6;

/*import React, { useReducer } from "react";                                 //Using useReducer hook

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ textAlign: "center" }}>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
    </div>
  );
}

export default Counter;*/
