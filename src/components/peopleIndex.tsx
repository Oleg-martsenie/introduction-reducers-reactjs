import { PeopleList } from '../hooks/peopleList'
import React, {useState, ChangeEvent, useEffect} from 'react'

export const PeopleApp = () => {
  const [peopleState, peopleDispatch] = PeopleList()

  const [people, setPeople] = useState('')

  const handlePeopleList = (e: ChangeEvent<HTMLInputElement>) => {
    setPeople(e.target.value);
  }

  const handleAddButton = () => {
    if(people) {
      peopleDispatch({
        type: 'ADD',
        payload: {
          name: people
        }
      })
      setPeople('')
    } else {
      window.alert('Para adicionar um item a lista é preciso que o campo esta preenchido')
    }
  }

  const handleKeyPressed = (e: any) => {
    if(e.key === 'Enter') {
      handleAddButton()
    }
  }

  const orderButton = () => {
    peopleDispatch({type: 'ORDER'})

  }

  const handleDeleteButton = (id: string) => {
    peopleDispatch({type: 'DEL', payload: {id}})

  }

  return (
    <div className='PeopleApp'>
        <div className="addPeople">
          <input type="text" value={people}  onKeyPress={handleKeyPressed} onChange={handlePeopleList}/>
          <button onClick={handleAddButton}>Add to List</button>
          <button onClick={orderButton} className="order" >ORDER A - Z</button>
        </div>
      <hr/>
      <h2>People List:</h2>
       <div className="people-area">
          <ul>
            {peopleState.map((item, index) => (
              <div className="item-list">
                <li key={index}>{item.name}</li>
                <button onClick={() => handleDeleteButton(item.id)}
                >🗑</button>
              </div>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default PeopleApp