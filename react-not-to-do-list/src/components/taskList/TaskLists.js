import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import TaskContext from "../../MyContext";
import { useSelector, useDispatch } from "react-redux";
import { taskSwitch } from "./taskAction.js";
import { setItemToDelete } from "./taskSlice";
export const TaskLists = () => {
  const dispatch = useDispatch();
  const task = useContext(TaskContext);
  const { taskLists, itemToDelete } = useSelector((state) => state.task);
  return (
    <>
      <h2>Task Lists</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Task</th>
            <th>Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskLists.map((row, i) => (
            <tr key={i}>
              <td>
                <input
                  type="checkbox"
                  defaultValue={row._id}
                  onChange={(e) => dispatch(setItemToDelete(e.target))}
                  checked={itemToDelete.includes(row._id)}
                />{" "}
                <label>{row?.title}</label>
              </td>

              <td>{row?.hr}</td>
              <td>
                <Button
                  onClick={() =>
                    dispatch(taskSwitch({ _id: row._id, todo: false }))
                  }
                >
                  Mark As Not To
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
