import logo from './logo.svg';
import React,{useState} from 'react'

import {Container,Row,Col,Button,Alert} from 'react-bootstrap';
import './App.css';
import { AddForm } from './components/form/AddForm';
import { TaskLists } from './components/taskList/TaskLists';
import { NoToDoList } from './components/taskList/NoToDoList';

// arg.reduce((subtotal, item)=>{subtotal+item.hr},0)


const initialTaskLists=[

]

const App = () => {
  const [taskLists, setTaskLists] = useState(initialTaskLists);
  const [noToDoList, setNoToDoList] = useState([]);
  
  const [CheckedItem, setCheckedItem] = useState("")
  const [itemToDelete, setitemToDelete] = useState([])
   const [notToDoItemToDelete, setNotToDoItemToDelete] = useState([])

// calculate total hours 
const toDoToatalHrs=taskLists.reduce((subTtl,item)=>
 subTtl + item.hr,0
)
const notToDoToatalHrs=noToDoList.reduce((subTtl,item)=>
 subTtl + item.hr,0
)
const totalHrs= +toDoToatalHrs + +notToDoToatalHrs;

// to hold the deleted item in tasklist
  const handleOnChange=e=>{
    const{checked,value}=e.target

    if (checked){
      return   setitemToDelete([...itemToDelete,+value]);
    }
    // remove from array
    const newList =taskLists.filter(item=>item !=value);
   
    setitemToDelete(newList);
  
  }
  // add and remove item from no to do list
    const handleOnChangeNotToDo=e=>{
    const{checked,value}=e.target

    if (checked){
      return   setNotToDoItemToDelete([...notToDoItemToDelete,+value]);
    }
    // remove from array
    const newList =noToDoList.filter(item=>item !=value);
   
    setNotToDoItemToDelete(newList);
  
  }
  // deleteitem when button is clicked
  const deleteItems=() =>{
   if( window.confirm("sure?")){
     const newArg=taskLists.filter((item,i) => !itemToDelete.includes(i));
     const notToDoArg=noToDoList.filter((item,i)=> !notToDoItemToDelete.includes(i));
     setNoToDoList(notToDoArg);
       setTaskLists(newArg);
       setNotToDoItemToDelete([]);
         setitemToDelete([]);
     const newHrTtl=newArg.reduce((subTtl,item) =>{
       return subTtl+item.hr;
     },0);


    
   
   
   }

  }
  const handOnAddTask= (frmDt) =>{
    if (+totalHrs + +frmDt.hr>168){
      return alert("You are going pass the hours in the week")
    }

    setTaskLists([...taskLists,frmDt]);
  }



  const handOnMarkAsNotToDo= index =>{
    const item=taskLists[index];
    const newArg=taskLists.filter((item,i)=> i !=index)
    setTaskLists(newArg);
    setNoToDoList([...noToDoList,item]);

 
    
     }
     

    //   const handOnMarkAsNotToDo= index =>{
    // const item=taskLists.slice(index,1)
    // setNoToDoList([...noToDoList,item]);
    
    //  }
     const markAsToDo = index =>{
       const item =noToDoList[index]
       const newArg=noToDoList.filter((item,i)=> i !=index)
       setNoToDoList(newArg)
       setTaskLists([...taskLists,item]);
     }
   


  return (
    <div className="main">
<Container variant="primary" >
  <Row>
    <Col>
    <div className="text-center pt-5"><h1>Not To Do List</h1></div>
    </Col>
  </Row>
  <hr></hr>

<AddForm handleOnAddTask={handOnAddTask}
/>
<hr></hr>
<Row>
  <Col>
  <TaskLists taskLists={taskLists}
  handOnMarkAsNotToDo={handOnMarkAsNotToDo} handleOnChange={handleOnChange}
  />
  </Col>
  <Col>
  <NoToDoList  noToDoList={noToDoList}
  markAsToDo={markAsToDo} handleOnChangeNotToDo={handleOnChangeNotToDo} />
  </Col>
</Row>
<hr></hr>
<Row><Alert  variant="info">You have  {+totalHrs}/168 hours of task to be done </Alert></Row>
<Row > <Button data-toggle="tooltip" title="Click here to  delete the items" variant="primary"  type="" onClick={deleteItems}> Delete </Button></Row>
{/* list items */}

</Container>
    </div>
  );
}

export default App;
