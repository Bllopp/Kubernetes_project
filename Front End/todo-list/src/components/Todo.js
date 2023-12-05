import React, { useEffect } from 'react';
import {useState} from 'react';
import './todo.css'
import plus_button from '../icons8-plus-24.png' 

function Todo ({onLogout}) {

  var [tasks,setTasks] = useState([]);
  var [input,setInput] = useState('');

  

  const handleWrite = e => {
    setInput(e.target.value)
  }

  const newTask = () => {
    if (input === '') return
    setTasks([...tasks,[input,false]])
    // requet Done POST [idTask] 
    setInput('')

    console.log(tasks)
  }

  const handleDone = (e, index) => {
  
    console.log(index);

    setTasks(prevTasks => {
    const newTasks = [...prevTasks];
    newTasks[index][1] = true;
    return newTasks;
  });

  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') newTask()
  }

    return (
      <div className="Todo">
          <div className='tasks_container'>
            {tasks.map((element, index) => (
              <div key={index} className={element[1] ? "task-done" : "task"}> 
             
              <span className='done_button'>
              <img value={index} className='check-icon' onClick={e => handleDone(e,index)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAmdJREFUeF7t29FRwzAQRdFNJ1AJ0AmdAJVQCpRCKYwGe0ggsS1b0tuVbn74cWYn92SNJ3FOxkNa4CSdznADQPwmAAAAcQHxeDYAAHEB8Xg2AABxAfF4NgAAcQHxeDYAAHEB8Xg2AABxAfF4NgAAcQHxeDYAAHEB8Xg2AABxAfF4NgAAcQHxeDYAAHEB8Xg2AABxAfF4NgAAcQHxeDZgHeDRzB7M7G390PwjAFhuluJ/TIe81kAA4DbAefz5qOIIAFwHuBa/CgIA/wGW4hdHAOASYEv8oggA/ALkxE/PejKzz/zrnstnAPDTQxI/DQZAGB8AcfzRAWSnnfP/AqOeglzEH3UD3MQfEcBV/NEA3MUfCcBl/FEA3MYfAcB1/N4B3MfvGSBE/NYA79NXel9HP0FceX6Y+C0BUvznKdy9mdVCCBW/FcB5/PnNWwMhXPwWANfi10AIGb82wFL8kghh49cEeDGzdAvHlseR01Ho+DUBUpi0AXdbBMxsD0L4+DUB5u9ZayF0Eb82QC2EbuK3ACiN0FX8VgClELqL3xLgKEKX8VsD7EVIV1LzLeJbLqqK3LG2ZVCJYxR3ReReoua8zlDxFRswx6yBEC6+EmDP6WhpE0LGVwOUQggb3wPAUYTQ8b0A7EUIH98TQC5CF/G9AWxF6Ca+R4A1hK7iewW4hdBdfM8AfxG6jO8dYEZIfw//GjHn84yWxyo+C2r5+tzPAkBMBAAA4gLi8WwAAOIC4vFsAADiAuLxbAAA4gLi8WwAAOIC4vFsAADiAuLxbAAA4gLi8WwAAOIC4vFsAADiAuLxbAAA4gLi8d8fw3Fhe9ciIAAAAABJRU5ErkJggg=="/>
      
              </span>
              <p className='task_name' >{element[0]}</p>
              <p className='task_status'> {element[1] ? "Done" : "left to do"} </p>
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