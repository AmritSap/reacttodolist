import React,{useState} from 'react'
import {Button,Table,Form,Alert} from 'react-bootstrap';


export const TaskLists = ({taskLists,handOnMarkAsNotToDo,handleOnChange}) => {
//   const [checkedItemFromTaskList, setcheckedItemFromTaskList] = useState([])
//     const dothisOnChange2 = (e)=>{
//       const checkBoxCheck=e.target.checked
//       const checkedValue=e.target.value
// checkBoxCheck && setcheckedItemFromTaskList([...checkedItemFromTaskList,checkedValue])

     
    return (
        <>
        <h2 >Task Lists<i style={{color:"blue",marginLeft:"20px" }} className="iconDecorate" data-toggle="tooltip" title="Taklists holds all the task that are to be done"  class="fas fa-info-circle" ></i></h2>
      <Table striped bordered hover size="lg">
  <thead>
    <tr>
     
      <th>Task</th>
      <th>Hours</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {taskLists.map((row,i)=>
    <tr key={i}>
       <td><input  type="checkbox" label="" defaultValue={i} onChange={handleOnChange}/><label>{row?.title}</label></td>
     
      <td>{row?.hr}</td>
      <td><button data-toggle="tooltip" title="Click here to mark the task as no to do" onClick={() => handOnMarkAsNotToDo(i)}>Mark as not to</button></td>
    
    </tr>)}
  
    
  </tbody>
</Table>
</>
    )
}
