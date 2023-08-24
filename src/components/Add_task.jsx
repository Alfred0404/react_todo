import PropTypes from 'prop-types';
import { useState } from 'react'

export default function Add_task(props) {

    const [task, setTask] = useState('')

    const add_task = (e) => {
        e.preventDefault()
        props.onSubmit(task)
        setTask('')
    }


    return (
    <div>
        <form onSubmit={add_task} className='form_container' >
            <input type="text" className='text_input' id="add" placeholder='type your task...' value={task} onChange={(e) => setTask(e.target.value)}/>
            <button type='submit' className='btn' >Add task</button>
        </form>
    </div>
  )
}

Add_task.propTypes = {
    onSubmit: PropTypes.func
}