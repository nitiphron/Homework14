import { useState } from "react"
import TodoEditForm from "./TodoEditForm"
import TodoItem from "./TodoItem"

function TodoContainer(props) {
  const {todos, hdlEdit, hdlDel} = props
  const [editId, setEditId] = useState(-1)
  return (
    <div className="todo-container">
    { todos.map( el=> (
     (el.id===editId)
        ? <TodoEditForm 
            key={el.id} 
            job={el} 
            onDone={()=>setEditId(-1)}
            hdlEdit={hdlEdit}
          />
        : <TodoItem key={el.id} job={el} setEditId={setEditId} hdlDel={hdlDel}/>
    ))  
    }  
    </div>
  )
}

export default TodoContainer