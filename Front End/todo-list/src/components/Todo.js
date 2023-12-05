import React from 'react';
import {useState} from 'react';


function Todo ({onLogout}) {

  var [tasks,setTasks] = useState([]);
  var [input,setInput] = useState('');

  

  const handleWrite = e => {
    setInput(e.target.value)
  }

  const newTask = () => {
    setTasks([...tasks,[input,false]])
    setInput('')

    console.log(tasks)
  }

    return (
      <div className="Todo">
        <div className="input">
          <input className="todo-input" value={input} onChange={handleWrite}></input>
          <input type="button" value="Ajouter" onClick={newTask}></input>
          </div>
          <div className='tasks_container'>
            {tasks.map((element, index) => (
              <p key={index} className="task">{element[0]}</p>
            ))}
          </div>
          <div >
            <button onclick={onLogout()}>Loug out</button>
          </div>
      </div>
    )
}

export default Todo;