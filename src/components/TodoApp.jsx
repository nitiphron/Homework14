import { useEffect, useState } from "react"
import axios from 'axios'
import Dashboard from "./Dashboard"
import FormAddTodo from "./FormAddTodo"
import TodoContainer from "./TodoContainer"

function TodoApp() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [trigger, setTrigger] = useState(false)
  const apiUrl = 'http://localhost:8000/todos'

  useEffect( ()=>{
    setIsLoading(true)
    axios.get(apiUrl).then( res=>{
      setData(res.data)
      setIsLoading(false)
    })
  }, [trigger] )

  const hdlAdd = (newJob) => {
    axios.post(apiUrl,newJob).then(res=>{
      setTrigger(prv=>!prv)
    })
  }

  const hdlEdit = (id, updatedJob) => {
    axios.put(`${apiUrl}/${id}`, updatedJob)
    .then(res => {
      setTrigger(prv=>!prv)
    })
  }

  const hdlDel = (id) => {
    axios.delete(`${apiUrl}/${id}`)
    .then(res => {
      setTrigger(prv=>!prv)
    })
  }

  if (isLoading) {
    return ( <h1>Loading...</h1> )
  }

  return (
    <div className="todo-app">
      <Dashboard task={data.length}/>
      <FormAddTodo hdlAdd={hdlAdd}/>
      <TodoContainer todos={data} hdlEdit={hdlEdit} hdlDel={hdlDel}/>
    </div>
  )
}

export default TodoApp