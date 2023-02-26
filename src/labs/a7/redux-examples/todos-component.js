import React, {useState} from "react"

import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {

  const todos = useSelector(state => state.todos)

  const [todo, setTodo] = useState({do: ''})



  const dispatch = useDispatch()

  // create
  const createTodoClickHandler = () => {
    dispatch(addTodo(todo))
  }

  // delete
  const deleteTodoClickHandler = (index) => {
    dispatch(deleteTodo(index))
  }

  // update
  const toggleTodoDone = (todo) => {
    dispatch(todoDoneToggle(todo))
  }



  // handle keystroke changes in input field
  const todoChangeHandler = (event) =>
  {
    const doValue = event.target.value
    // create newTodo object instance
    const newTodo = {
      do: doValue
    }
    setTodo(newTodo)
  }

  return(
      <>
        <h3>Todos</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <input onChange={todoChangeHandler} value={todo.do} className="form-control w-75" />
            <button onClick={createTodoClickHandler} className="btn btn-primary w-25 float-end">Create</button>
          </li>
          {

            todos.map((todo, index) =>
                <li key= {todo._id} className="list-group-item">

                  <button onClick={() => deleteTodoClickHandler(index)}
                          className="btn btn-danger float-end ms-2">Delete</button>

                  <input type="checkbox" checked={todo.done} onChange={() => toggleTodoDone(todo)} className="me-2"/>
                  {todo.do}
                </li>
            )
          }
        </ul>
      </>
  )
}

export default Todos;