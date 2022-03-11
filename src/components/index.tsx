import { useContagem } from '../hooks/count'

import React from 'react'

export const ContagemComponet = () => {
  const [state, dispatch] = useContagem();

  return <>
    <h2>Contagem: {state.count}</h2>
    <div className="buttons-area">
      <button onClick={() => dispatch({type: 'ADD'})}>+</button>
      <button onClick={() => dispatch({type: 'DEL'})}>-</button>
      <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
    </div>
  </>
}
