import { ADD_TASK, DELETE_TASK, EDIT_TASK, DONE_TASK } from "../constant/ActionTypes";

export const addtask = (payload) => ({
    type: ADD_TASK,
    payload
});

export const deletetask = (payload) => ({
    type: DELETE_TASK,
    payload
});

export const donetask = (payload) => ({
    type: DONE_TASK,
    payload
});

export const edittask = (payload) => ({
    type: EDIT_TASK,
    payload
});