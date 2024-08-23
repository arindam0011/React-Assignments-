import React, {useState} from 'react';
import '../styles/App.css'

const CounterClick = ()=>{
  const [Count, setCount] = useState(0);
        const incrementClick = () =>{
          setCount(Count+1)
        }
  return(
      <div>
        <p>Button clicked <span>{Count}</span> times</p>
        <button onClick={incrementClick}>Click Me</button>
    </div>
    
  )
}

export default CounterClick
