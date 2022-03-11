import { useReducer } from "react"

interface reducerState {count: number}  
interface reducerAction {type: string;}
  
  const initalState = {count: 0}

  const reducer = (state: reducerState, action: reducerAction) => {
    switch(action.type) {
      case 'ADD':
        return {...state, count: state.count + 1}
      break;
      case 'DEL':
        if(state.count > 0) {
          return {...state, count: state.count - 1}
        }
      break;
      case 'RESET':
        return initalState
      break;
    }
  
  
    return state
    }

export const useContagem = () => {
    return useReducer(reducer, initalState)
}