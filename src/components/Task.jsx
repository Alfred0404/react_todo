import PropTypes from 'prop-types';
import './task.css'


export default function Task({task }) {

  return (
    <div className='task'>
      <p>{task}</p>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.string
}
