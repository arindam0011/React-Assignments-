
  import React from "react";
  import './../styles/App.css';
  import { useSelector, useDispatch } from "react-redux";
  import { increment, decrement } from "../Utill/Counter";

  const App = () => {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
          <p>Your count is: <span id="counter-value">{count}</span></p>
          <button id="increment" onClick={() => dispatch(increment(1))}>Increment</button>
          <button id="decrement" onClick={() => dispatch(decrement(1))}>Decrement</button>
        </div>
    )
  }

  export default App
