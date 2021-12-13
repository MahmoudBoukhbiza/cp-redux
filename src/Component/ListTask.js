import { useSelector } from 'react-redux'
import React from 'react'
import Task from './Task'


const ListTask = ({filter}) => {
    const List = useSelector(state => state)
    
   
    return (
        <div>
          {filter ? List.filter(el=>el.isDone===true).map(el=> <Task el={el}/> ): List.map(el=> <Task el={el}/>)}
            
        </div>
    )
}

export default ListTask