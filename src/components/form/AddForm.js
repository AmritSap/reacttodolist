import React,{useState} from 'react'
import {Row,Col,Form,Button} from 'react-bootstrap'

const initialFormData ={
    title:"",
    hr:0,
}
export const AddForm = ({handleOnAddTask}) => {
    const [task, setTask] = useState(initialFormData)

    const handleOnChange = e =>
    {
        const {name,value}=e.target;
        setTask({...task,[name]:name==='hr'?+value: value,}  
)
    }
    const handleOnSubmit =e =>{
        e.preventDefault();

        handleOnAddTask(task);
    }
    return (
       <>
            
            <Form  onSubmit={handleOnSubmit}>
  <Row>
    <Col>
      <Form.Control placeholder="Task Name" onChange={handleOnChange}  value={task.title} name="title" required/>
    </Col>
    <Col>
      <Form.Control type="number"  placeholder="Number of hours" value={task.hr} required
       onChange={handleOnChange}  name="hr" />
    </Col>
    <Col>  <Button data-toggle="tooltip" title="Click here to add the items in task lists" variant="primary" type="submit">
    Add Task
  </Button></Col>
  </Row>
</Form>
       </>
    )
}
