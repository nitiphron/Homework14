/* eslint-disable react/prop-types */
function TodoItem(props) {
  const {job} = props
  return (
    <div className="todo-item">
      
      <p>{job.todo} </p>
      <div className="btn-group">
        <a>Edit</a>
        <a>Delete</a>
      </div>
    </div>
  )
}

export default TodoItem