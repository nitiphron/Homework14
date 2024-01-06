function TodoItem(props) {
  const {job, setEditId, hdlDel} = props

  const onDelete = () => {
    if(confirm('Delete this item?')) { hdlDel(job.id) }
  }
  return (
    <div className="todo-item">
      <p className={job.completed ? 'job-done' : ''}>{job.todo} </p>
      <div className="btn-group">
        <a onClick={()=>{setEditId(job.id)}}>Edit</a>
        <a onClick={onDelete}>Delete</a>
      </div>
    </div>
  )
}

export default TodoItem