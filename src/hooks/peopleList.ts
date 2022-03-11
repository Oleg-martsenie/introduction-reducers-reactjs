import { v4 as uuidv4} from "uuid";
import { useReducer } from "react";

interface personData {
    id: string,
    name: string
}

interface actionType {
    type: string;
    payload?:{
        name?: string,
        id?: string
    }
}


const initialDatas: personData[] = [];

const reducerPeople = (state: personData[], action: actionType) => {
    switch(action.type) {
        case 'ADD':
            if(action.payload?.name) {
                const newState = [...state]
                newState.push({
                    id: uuidv4(),
                    name: action.payload?.name
                })
                return newState
            }
        break;
        case 'DEL':
            if(action.payload?.id) {
                let newState = [...state];
                newState = newState.filter(item => item.id !== action.payload?.id)
                return newState
            }
        break;
        case 'ORDER':
            let newState = [...state]
            newState = newState.sort((a,b) => ( a.name > b.name ) ? 1 : -1)
            return newState
        break;
    }

    return state;
}

export const PeopleList = () => {

    return useReducer(reducerPeople, initialDatas);
}