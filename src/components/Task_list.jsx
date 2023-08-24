import Task from './Task'
import PropTypes from 'prop-types';

export default function Task_list(props) {

    const { tasks } = props

    return (
        <div className='task_list'>
            {tasks.map((task, index) => (
                <Task key={index} task={task.content} />
            ))}
        </div>
    )
}

Task_list.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object)
}