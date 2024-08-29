import React, { useState } from 'react'

const App = () => {
  const[arr] = useState(["Satish", "Ankita", "Amit", "Chetan", "Vijay", "Rahul"]);
  return (
    <div id="main">
               <ol key="relativeList" id='relativeList'>
                {
                  arr.map((item, index) => <li key={'relativeListItem'+(index+1)} id={'relativeListItem'+(index+1)}>{item}</li>)
                }
               </ol>
    </div>
  )
}

export default App
