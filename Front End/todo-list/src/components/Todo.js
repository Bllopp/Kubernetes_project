import React from 'react';
import {useState} from 'react';
import './todo.css'
import plus_button from '../icons8-plus-24.png' 

function Todo () {

  var [tasks,setTasks] = useState([]);
  var [input,setInput] = useState('');

  const handleWrite = e => {
    setInput(e.target.value)
  }

  const newTask = () => {
    if (input === '') return
    setTasks([...tasks,[input,false]])
    setInput('')

    console.log(tasks)
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') newTask()
  }

    return (
      <div className="Todo">
          <div className='tasks_container'>
            {tasks.map((element, index) => (
              <div key={index} className="task"> 
              <p  >{element[0]}</p>
              <p> {element[1] ? "Done" : "Left to do"} </p>
              </div>
            ))}
          </div>
          <div className="input">
            <input className="todo-input" value={input} onChange={handleWrite} onKeyDown={handleEnter}></input>
            <input className="todo-button" type="image" src={plus_button} value="Ajouter" onClick={newTask} ></input>
          </div>
      </div>
    )
}

export default Todo;