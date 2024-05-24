import { useState } from "react";
import ShowTasks from "./ShowTasks";

const Todo=()=>{
const [task,setTask]=useState("")
const [totalTasks,setTotalTasks]=useState([])
const [editId,setEditId]=useState(null)

const addTask=()=>{
const newTask={
    id:totalTasks.length+1,
    task:task,
    status:"Pending"
  }
  setTotalTasks([...totalTasks,newTask])
  setTask("")
}

// console.log(totalTasks);

function toDelete(id){
let filtered= totalTasks.filter((task)=>{
   return task.id !=id
})
setTotalTasks(filtered)
}

const toEdit=(id)=>{
    setEditId(id)
}

const cancelEdit=()=>{
   setEditId(null)
}

const saveEdit=(newEditedConent)=>{
//    console.log(newEditedConent);
let modified
   totalTasks.map((oldtask)=>{
    if(newEditedConent.id == oldtask.id){
         modified={...oldtask,...newEditedConent}
        console.log(modified);
    }
   })

   let final=totalTasks.filter((alldata)=>{
    return alldata.id != newEditedConent.id
   })
   setTotalTasks([...final,modified])
   setEditId(null)
}

    return(
        <>
          <h1 style={{color:'white', textAlign:'center'}}>Welcome To-Do</h1>
          <div className="inputField">
            <label htmlFor="" style={{margin:'10px'}}>Task</label>
            <input onChange={(e)=>setTask(e.target.value)} type="text" name="" id="" value={task} />
            <button onClick={addTask} style={{marginLeft:'100px'}}>ADD </button>
          </div>
          <table style={{marginTop:'50px', width:'600px'}}>
            <thead >
               <tr >
               <th>No</th>
                <th>Task</th>
                <th>Status</th>
                <th>Action</th>
               </tr>
            </thead>
            <tbody>  
            {totalTasks.map((task,index)=>
           <ShowTasks task={task} key={index} deleteFunc={toDelete} editFunc={toEdit} editId={editId} cancelEdit={cancelEdit} save={saveEdit} />
        )}          
            </tbody>
        </table>

       
         
        </>

      

    )
}

export default Todo;