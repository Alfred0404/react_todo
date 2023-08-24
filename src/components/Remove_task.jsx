import PropTypes from 'prop-types';

export default function Remove_task(props) {

    function handle_remove () {
        props.onClick()
    }

    return (
    <button onClick={handle_remove} className='btn del' >Remove task</button>
  )
}

Remove_task.propTypes = {
    onClick: PropTypes.func
}