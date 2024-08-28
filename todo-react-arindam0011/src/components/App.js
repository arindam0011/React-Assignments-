
import React from "react";
import './../styles/App.css';
import '../styles/App.css';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div id="master">
      <div id='main'>
        <div id="todo">
          <input type="text" className="input" placeholder="Enter Task" value={taskInput}
            onChange={((e) => setTaskInput(e.target.value))}
          />
          <button className="btn"
            onClick={() => {
              setTasks([...tasks, { id: uuidv4(), Name: taskInput }]);
              setTaskInput("")
            }
            }
          >Add Todo</button>
        </div>
        <ul id="tasks">
          {
            tasks.map(task => <li className="task" key={task.id}><p className="taskName">{task.Name}</p><button className="btn"
            onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}
            
            >Delete</button></li>)
          }

        </ul>
      </div>
    </div>
  )
}

export default App
