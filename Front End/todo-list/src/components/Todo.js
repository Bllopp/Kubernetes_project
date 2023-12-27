import React, { useEffect } from 'react';
import {useState} from 'react';
import './todo.css'
import plus_button from '../icons8-plus-24.png' 
import edit_icon from '../edit.png';
import TaskService from '../services/TaskService'

function Todo (props) {

  var onLogout = props.onLogout;
  var userId = props.userId
  var [tasks,setTasks] = useState([]);
  var [input,setInput] = useState('');

  let task_api_url = process.env.API_url || 'https://myservice.info/tasks'
  task_api_url += '/tasks';
  const API_url = task_api_url;
  const src_delete = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKRJREFUSEvtlcERgCAMBNdOtBMtxUosxVK0FDvRYUZ4xImHIj/5SSR7SQauofJqKudHAXpgBlpHyAaMwOoJVYAFCJC7FSDdW8B+HvSEqLhskUqg4hdAPFA6+1SxLb06ICqXpZsS3f9fD+9rgFWovhM/twKVsLhFP+Byr5625J+BfJqKW6QIjwE5RmOhwdUGu+nd5OBiU4abxXyudSrLVK2R8eqAA04lOBnZrFOdAAAAAElFTkSuQmCC';
  const check_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAmdJREFUeF7t29FRwzAQRdFNJ1AJ0AmdAJVQCpRCKYwGe0ggsS1b0tuVbn74cWYn92SNJ3FOxkNa4CSdznADQPwmAAAAcQHxeDYAAHEB8Xg2AABxAfF4NgAAcQHxeDYAAHEB8Xg2AABxAfF4NgAAcQHxeDYAAHEB8Xg2AABxAfF4NgAAcQHxeDYAAHEB8Xg2AABxAfF4NgAAcQHxeDZgHeDRzB7M7G390PwjAFhuluJ/TIe81kAA4DbAefz5qOIIAFwHuBa/CgIA/wGW4hdHAOASYEv8oggA/ALkxE/PejKzz/zrnstnAPDTQxI/DQZAGB8AcfzRAWSnnfP/AqOeglzEH3UD3MQfEcBV/NEA3MUfCcBl/FEA3MYfAcB1/N4B3MfvGSBE/NYA79NXel9HP0FceX6Y+C0BUvznKdy9mdVCCBW/FcB5/PnNWwMhXPwWANfi10AIGb82wFL8kghh49cEeDGzdAvHlseR01Ho+DUBUpi0AXdbBMxsD0L4+DUB5u9ZayF0Eb82QC2EbuK3ACiN0FX8VgClELqL3xLgKEKX8VsD7EVIV1LzLeJbLqqK3LG2ZVCJYxR3ReReoua8zlDxFRswx6yBEC6+EmDP6WhpE0LGVwOUQggb3wPAUYTQ8b0A7EUIH98TQC5CF/G9AWxF6Ca+R4A1hK7iewW4hdBdfM8AfxG6jO8dYEZIfw//GjHn84yWxyo+C2r5+tzPAkBMBAAA4gLi8WwAAOIC4vFsAADiAuLxbAAA4gLi8WwAAOIC4vFsAADiAuLxbAAA4gLi8WwAAOIC4vFsAADiAuLxbAAA4gLi8d8fw3Fhe9ciIAAAAABJRU5ErkJggg==";
  const handleWrite = e => {
    setInput(e.target.value)
  }

  const newTask = () => {
    let userIdToken = localStorage.getItem('userId');
    // userIdToken = 1;
    console.log(userIdToken)
    if (input === '') return
    setTasks([...tasks,{name: input,status:  0, userId: userIdToken}])
    // requet Done POST [idTask] 

    fetch(API_url + '/newTask?name='+input + '&userId='+userIdToken , {
      method : "POST",
    })
    .then(res => console.log(res.headers))
    setInput('')

    console.log(tasks)
  }

  const handleDone = (e, index) => {
  
    console.log(index);

    setTasks(prevTasks => {
    const newTasks = [...prevTasks];
    newTasks[index].status = true;
    return newTasks;
  });

  console.log(tasks)

  }
  const logoutSession = () =>{
    var token = localStorage.getItem('token')

    if (!token) return;

    
    localStorage.removeItem('token')

    onLogout();
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') newTask()
  }

  useEffect(() => {
    
    let token = localStorage.getItem('token')
   
    if (token) {
    
      let userIdToken = localStorage.getItem('userId');
    //   fetch(API_url + '/' + 1
    // )
    // .then( res => res.json() )
    // .then(tasks => setTasks( tasks))
    // .then(tasks => console.log(tasks))

    console.log(userIdToken)

    const fetchTasks = async () => {
      const response = await fetch(API_url + '/' + userIdToken);
      const data = await response.json();
      console.log(data)
      setTasks(data)
    }

    fetchTasks()

    }
  },[])

    return (
      <div className="Todo">
        <div className='logout'> 
          <input type='button' value ='logout' onClick={logoutSession}></input>
        </div>
          <div className='tasks_container'>
            {tasks.map((element, index) => (
              <div key={index} className={element.status ? "task" : "task-done"}> 
             
              <span className='done_button'>
              <img value={index} className='check-icon' onClick={e => handleDone(e,index)} src={check_icon} alt=''/>
      
              </span>
              <div className='edit_task'>
              <p className='task_name' >{element.name}</p>
              <img src={edit_icon} className='edit_button' alt=''></img>
              </div>
              <p className='task_status'> {element.status ? "left to do" : "Done" } </p>
                <div className='delete_div' >
                  <img src={src_delete}/>
                </div>
              </div>
            ))}
          </div>
          <div className="input">
            
            <input className="todo-input" value={input} onChange={handleWrite} onKeyDown={handleEnter}></input>
            <input className="todo-button" type="image" src={plus_button} value="Ajouter" onClick={newTask} alt=''></input>
          </div>
      </div>
    )
}

export default Todo;