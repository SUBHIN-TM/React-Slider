import { useState } from "react";

const ShowTasks=({task ,deleteFunc,editFunc,editId,cancelEdit,save})=>{
    const isEdit=task.id==editId
    const [taskedited,setTaskedited]=useState(task.task)
    const [taskStatus,setTaskstatus]=useState(task.status)
    const editedContent={
        id:task.id,
        task:taskedited,
        status:taskStatus,
    }
    // console.log("edited",editedContent);
    return(
        <tr>
        <td>
            {task.id}
        </td>
        <td>{isEdit? <input type="text" onChange={(e)=>setTaskedited(e.target.value)} value={taskedited} /> :task.task}</td>
        <td>{isEdit? 
        <select  onChange={(e)=>setTaskstatus(e.target.value)} name="" id="" value={taskStatus}>
            <option value="Pending">Pending</option>
            <option value="Done">Done</option>
            <option value="Cancelled">Cancelled</option>
        </select>
        : task.status
        }</td>
        <td style={{display:'flex', justifyContent:'space-around', padding:'10px'}}   className="action">
            {isEdit?(
                <>
                 <button onClick={()=>save(editedContent)}>Save</button> 
                 <button onClick={()=>cancelEdit()}>Cancel</button>
                </>
            ) : (
                <>
                 <button onClick={()=>editFunc(task.id)}>EDIT</button>
                 <button onClick={()=>deleteFunc(task.id)}  >DELETE</button>
                </>
            )
            } 
    
        </td>
    </tr>
    )
}

export default ShowTasks;