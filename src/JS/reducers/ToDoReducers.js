import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from '../constant/ActionTypes'

const initialestate = []
const ToDoReducers = (state = initialestate, { type, payload }) => {
    switch (type) {
        case ADD_TASK: return [...state, payload]
        case DELETE_TASK: return state.filter(el => el.id !== payload)
        case DONE_TASK: return state.map(el => el.id === payload ? { ...el, isDone: !el.isDone } : el)
        case EDIT_TASK: return state.map(el => el.id === payload.id ? { ...el, task: payload.taskmodified } : el)


        default: return state;
    }
}

export default ToDoReducers;