import './App.css';
import type {Task} from "./types.tsx";
import React, { useState } from 'react';


function App() {
const [taskId,setTaskId] = useState<number>(0);
const [tasks,setTasks] = useState<Task[]>([]);
const [taskName,setTaskName] = useState("");
const doneTasks: Task[] = tasks.filter((task) => task.status = "wykonane");
const notDoneTasks :Task[] =  tasks.filter((task) => task.status = "niewykonane");
function handleClick(){

  if(taskName.trim() !== ""){
      setTaskId(taskId+1);
     setTasks([...tasks,{id:taskId,task:taskName,status:"niewykonane"}]);
   
  }

 
    
  

}
function handleChange(event:React.ChangeEvent<HTMLInputElement>){

  setTaskName(event.target.value);
}
function changeStatus(event:React.ChangeEvent<HTMLInputElement>,id:number){
  tasks.map((task,index)=>{
    if(task.id == id){
      if(event.target.checked)
        
      task.status ="wykonane";
   
      else{
        task.status ="niewykonane";
      }
    }
  })

  

}
 

  return (
    <>
    <h1>To do List</h1>
    <div>
          <input onChange={handleChange} value={taskName} id ="searchBar" type="text" className="form-control border-0 bg-light" placeholder="Dodaj taska"/>
    <button onClick={handleClick}>Dodaj</button>
   </div>
   <p>Niewykonane zadania: {(tasks.filter((task) => task.status = "niewykonane")).length}</p>
    <section>
      {tasks.map((task,index) => (
        <div style={{display:'flex'}}>   <p key={task.id}>{task.task}</p> <input type="checkbox" name="status"  onChange={(event)=>changeStatus(event,task.id)}></input> </div>
     
      ))}
    </section>



    </>
  )
}

export default App
