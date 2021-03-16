import logo from './logo.svg';
import React,{useState} from 'react'
import {Button} from 'react-bootstrap/Button';
import {Container,Row,Col} from 'react-bootstrap';
import './App.css';
import { AddForm } from './components/form/AddForm';
import { TaskLists } from './components/taskList/TaskLists';
import { NoToDoList } from './components/taskList/NoToDoList';


const initialTaskLists=[

]

const App = () => {
  const [taskLists, setTaskLists] = useState(initialTaskLists);
  const [noToDoList, setNoToDoList] = useState([])
  const [totalHrs, setTotalHrs] = useState(0);

  // total function
  const calculateTotalHours=() =>{
    //tasklist
    const totalFrmToDo=0; 
    // nottodolist
    const totalFrmNotToDo=0;
    const total=totalFrmNotToDo+totalFrmNotToDo
  }

  const handOnAddTask= (frmDt) =>{
    setTaskLists([...taskLists,frmDt]);
  }



  const handOnMarkAsNotToDo= index =>{
    const item=taskLists.splice(index,1)
    setNoToDoList([...noToDoList,item[0]]);
    
     }

    //   const handOnMarkAsNotToDo= index =>{
    // const item=taskLists.slice(index,1)
    // setNoToDoList([...noToDoList,item]);
    
    //  }
     const markAsToDo = index =>{
       const item =noToDoList.splice(index,1);
       setTaskLists([...taskLists,item[0]]);
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
  handOnMarkAsNotToDo={handOnMarkAsNotToDo}/>
  </Col>
  <Col>
  <NoToDoList  noToDoList={noToDoList}
  markAsToDo={markAsToDo}/>
  </Col>
</Row>
{/* list items */}

</Container>
    </div>
  );
}

export default App;
