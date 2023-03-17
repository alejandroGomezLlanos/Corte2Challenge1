import {useReducer} from "react"
import {TodoReducer} from "./TodoReducer"
import {TodoList} from "./TodoList"
import {TodoAdd} from "./TodoAdd"

const initialState = [
    {
        id: new Date().getTime(),
        description: "Hacer los challenges",
        done: false
    }
]

export const TodoApp = () =>{
    const [todos, dispatchTodo] = useReducer(TodoReducer, initialState)
    
    return(
      <>
        <h1>TodoApp: 10, <small> Pendientes: 2</small></h1>
        <hr />
        
        <div className="row">
          <div className="col-7">
            <TodoList />
          </div>
        <div className="col-5">
          <TodoAdd />
          </div>
        </div>
      </>  
    );
}
export default TodoApp;