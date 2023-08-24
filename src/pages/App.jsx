import { useState } from 'react'
import Add_task from '../components/Add_task'
import Task_list from '../components/Task_list'
import './App.css'
import Remove_task from '../components/Remove_task'

function App() {

  const [tasks, setTasks] = useState([])

  function push_task (new_task) {
    const new_tasks = tasks.slice()
    new_tasks.push(new_task)
    setTasks(new_tasks)
  }


  function get_data (data) {
    push_task({id: tasks.length - 1, content: data})
    return data
  }


  function remove_task () {
    const new_tasks = tasks.slice()
    new_tasks.pop()
    setTasks(new_tasks)
  }


  return (
    <div className='app_container'>
      <h1 className='title'>Todo List</h1>
      <Task_list tasks={tasks} />
      <Add_task onSubmit={get_data} />
      <Remove_task onClick={remove_task} />
    </div>
  )
}

export default App
