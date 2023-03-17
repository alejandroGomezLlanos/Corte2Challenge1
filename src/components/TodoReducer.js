import {useReducer} from "react"

export const TodoReducer = (initialState, action) => {
    switch (action.type){
        case "ABC":
            throw new Error("La accion no ha sido implementada")
            break;
        default:
            return initialState;
    }
}
export default TodoReducer;