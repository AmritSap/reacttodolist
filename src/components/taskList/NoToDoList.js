import React from 'react'
import {Card,Button,Table} from 'react-bootstrap';

export const NoToDoList = ({noToDoList,markAsToDo}) => {
    return (
        <>
             <h2>Not To Do list</h2>
      <Table striped bordered hover size="lg">
  <thead>
    <tr>
     
      <th>Task</th>
      <th>Hours</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {noToDoList.map((row,i)=>
    <tr key={i}>
      <td>{row?.title}</td>
      <td>{row?.hr}</td>
      <td><button onClick={() => markAsToDo(i)}>Mark as to do</button></td>
    
    </tr>)}
  
   
  </tbody>
</Table>
</>
    )
}
