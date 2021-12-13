import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { edittask } from '../JS/action/actions'

const EditTask = ({ show, handleClose, id }) => {
  const [taskmodified, setTaskmodified] = useState("")
  const dispatch = useDispatch()
  return (
    <div>


      <input type="text" placeholder="edit your ToDo... " onChange={(e) => setTaskmodified(e.target.value)} />

      <button onClick={() => { handleClose(); dispatch(edittask({ id: id, taskmodified: taskmodified })) }}>
        Save Changes
      </button>


    </div>
  )
}

export default EditTask