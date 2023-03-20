import React, { useReducer } from "react";
 
const initialState = 0;
 
const reducer = (state, action) => {
    if (action.type === "INCREMENT") state = state + 1;
    
    if (action.type === "DECREMENT") state = state - 1;
    
    return state;
};
 
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
 
  return (
    <div>
      <p className="counter">Counter: {state}</p>
      <div>
        <button
          type="button"
          className="button"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <span> </span>
        <button
          type="button"
          className="button"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
 
export default UseReducer;