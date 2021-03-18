import React, { useState } from 'react';

import './App.css';
import image from "./check.png"

// eslint-disable-next-line no-undef


 export default function Todo(){
   var [task,setTask]=useState("");
   var [taskList,setTaskList]=useState([]);

   function hanlder(e){
    setTask(e.target.value)
   }
   function show(){
      const taskThem={
        id:Math.floor(Math.random()*1000),
        value:task,
        isCompleted:false
      }
      setTaskList([...taskList,taskThem])
     }

     function delet(e,id){
      setTaskList(taskList.filter((t)=>t.id!==id));
     }
     function completed(e,id){
      const element=taskList.findIndex((ele)=>ele.id === id);
      var newTaskList=[...taskList];
     
      newTaskList[element]={
        ...newTaskList[element],
        isCompleted:true
      }
      console.log(newTaskList[element])
      setTaskList(newTaskList)
     }
  return(
    <div className="cont">
 <div>
   <div className="input-holder">
   <input className="inputField" type="text" placeholder="Enter task...." value={task} onInput={hanlder}></input>
      <button className="addButton" onClick={show}>ADD</button>
   </div>
    <ul>
    {taskList.map(t=><li className={t.isCompleted?"cross":"none"} key={t.id} >{t.value}
    <div className="btn-container">
      <button className="btn1" onClick={(e)=>delet(e,t.id)}>delete</button>
      <button className="btn2" onClick={(e)=>completed(e,t.id)} >completed</button>
      <img className={t.isCompleted?"show":"hide"} src={image} alt=""></img>
    </div>
   </li>)}
    </ul>
    
    </div>
    </div>
   
  )
 }
  
