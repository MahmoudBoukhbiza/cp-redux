import { createStore } from "redux";
import ToDoReducers from "../reducers/ToDoReducers";
const Store = createStore(ToDoReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default Store;