import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { donetask, deletetask } from '../JS/action/actions'
import EditTask from './EditTask'
import '../Component/task.css'

const Task = ({ el }) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [id, SetId] = useState()
    return (
        <div className='Task'>
            <div>
                <span className={el.isDone && "line"}>{el.task}</span>
            </div>
            <div>
                <button onClick={() => dispatch(deletetask(el.id))}>DEL</button>

                <button onClick={() => { handleShow(); SetId(el.id) }}>EDIT</button>
                <EditTask show={show} handleClose={handleClose} id={id} />
            </div>
        </div>
    )
}

export default Task;