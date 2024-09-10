// App.js
import React from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import { addUser, addEmail } from "./User";


const App = () => {
  const dispatch = useDispatch();

  const { userName, email } = useSelector((state) => state.user);

  return (
    <div>
      <h1>User Information</h1>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        onChange={(e) => dispatch(addUser(e.target.value))}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        onChange={(e) => dispatch(addEmail(e.target.value))}
      />
      <p >Current values in store:</p>
      <p  className="output">Name - {userName}</p>
      <p className="output">Email - {email}</p>
    </div>
  );
};

export default App;
