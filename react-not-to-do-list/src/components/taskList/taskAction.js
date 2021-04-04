import {
  requestPending,
  addTaskSuccess,
  fetchTaskSuccess,
  requestFail,
  updateTaskSuccess,
  deleteTaskSuccess,
} from "./taskSlice";
import {
  createTask,
  getTaskLists,
  switchTask,
  deleteTaskLists,
} from "../../api/taskApi";

// Action to add the task

export const addTask = (fromDt) => async (dispatch) => {
  try {
    // call the api to send the data
    dispatch(requestPending());
    const result = await createTask(fromDt);
    dispatch(addTaskSuccess(result));
    result.status === "success" && dispatch(fetchTaskLists());
  } catch (error) {
    dispatch(requestFail(error.message));
  }
};

// This action fetch the task from state

export const fetchTaskLists = () => async (dispatch) => {
  try {
    dispatch(requestPending());
    // call the api to get tasklists
    const taskArg = await getTaskLists();
    dispatch(fetchTaskSuccess(taskArg));
  } catch (error) {
    dispatch(requestFail(error.message));
  }
};

// This action switch the item from (to do) to (not to do) and vice versa

export const taskSwitch = (toUpdate) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await switchTask(toUpdate);
    dispatch(updateTaskSuccess(result));
    result.status === "success" && dispatch(fetchTaskLists());
  } catch (error) {
    dispatch(requestFail(error.message));
  }
};

// This action is to delete the task which takes is as the parameter

export const deleteTasks = (ids) => async (dispatch) => {
  try {
    if (
      window.confirm("Are  you sure you want to delete the selected items?")
     ) {
      dispatch(requestPending());
      const result = await deleteTaskLists(ids);
      dispatch(deleteTaskSuccess(result));
      result.status === "success" && dispatch(fetchTaskLists());
    }
   } catch (error) {
    dispatch(requestFail(error.message));
   }
};
