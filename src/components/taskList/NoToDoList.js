import React,{useState} from 'react'
import {Card,Button,Table,Form,Alert} from 'react-bootstrap';

export const NoToDoList = ({
  noToDoList,
  markAsToDo,
  handleOnChangeNotToDo,
  notToDoItemToDelete,
}) => {
  const [checkedItemFromNotList, setcheckedItemFromNotList] = useState([]);
  const totalSavedTime = noToDoList.reduce((subTtl, item) => {
    return subTtl + +item.hr;
  }, 0);
  console.log(totalSavedTime);
  //        const dothisOnChange1 = (e)=>{
  //        const checkBoxCheck=e.target.checked
  //         const checkedItem=e.target.value
  // checkBoxCheck && setcheckedItemFromNotList([...checkedItemFromNotList,checkedItem])

  //      }
  console.log(checkedItemFromNotList);
  return (
    <>
      <h2>
        Not To Do list
        <i
          style={{ color: "blue", marginLeft: "20px" }}
          data-toggle="tooltip"
          title="Not To Do list holds all the task that are marked as no to do"
          class="fas fa-info-circle"
        ></i>
      </h2>
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            <th>Task</th>
            <th>Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {noToDoList.map((row, i) => (
            <tr key={i}>
              <td>
                {" "}
                <input
                  type="checkbox"
                  label=""
                  defaultValue={i}
                  onClick={handleOnChangeNotToDo}
                  checked={notToDoItemToDelete.includes(i)}
                />
                <label>{row?.title}</label>
              </td>

              <td>{row?.hr}</td>
              <td>
                <button
                  data-toggle="tooltip"
                  title="Click here to mark the task as to do"
                  onClick={() => markAsToDo(i)}
                >
                  Mark as to do
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {totalSavedTime > 0 ? (
        <Alert variant="success">You have saved {totalSavedTime} hours</Alert>
      ) : (
        " "
      )}
    </>
  );
};
