"use client"
import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { addTodo, completeTodo } from "@/app/features/todos/todoSlice"
import { store } from "./store";


export default function Home() {
  const todos = useSelector((store)=> store.todoSlice.todos)
  const [task,setTask]= useState("");
  const dispatch = useDispatch()
  const handleTask = (e)=> {
    setTask(e.target.value);
  }
  const handleSubmit = ()=>{

    const current = {
      task:task, completed: true
    }
    dispatch(addTodo(current))
    setTask("")

  }
  return (
 <div className=" ">
 <h1 className=" text-center text-3xl my-4 font-extrabold">
  Todo
 </h1>
 <div className=" w-3/4 mx-auto">
  <input type="text" placeholder="Type here..." className="input w-10/12 mr-2 " value={task} onChange={handleTask} />
  <button className="btn btn-outline btn-accent" onClick={()=>handleSubmit()}>Add Task</button>
  <div className="mx-auto mt-8 ">
    { todos.length ? (
      todos.map((task,id) => (
       <div key={id} className=" flex items-center space-x-4 bg-white " onClick={()=>completeTodo(id)}>
        <input type="radio" name={`radio ${id}`} className="radio radio-success" checked = {task.completed} />
        <h1  className=" text-2xl font-bold mb-2">{task.task}</h1>

       </div>
        ))
        ) : <h3 className=" text-2xl font-semibold">Lets Make out of it...</h3>
    }
  </div>
 </div>
 </div>
  )
}
