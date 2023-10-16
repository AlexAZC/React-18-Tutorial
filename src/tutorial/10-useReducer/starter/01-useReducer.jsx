import React, { useReducer } from 'react';
import { data } from '../../../data';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import reducer from './reducer';


const ReducerBasics = () => {

  const defaultState = {
    people:data,
    isLoading:false,
  }
  
  

  const [state,dispatch] = useReducer(reducer,defaultState)


  const resetList = () => {
      dispatch({type:RESET_LIST})
  }

  const clearList = () => {
      dispatch({type:CLEAR_LIST})
  }

  const removeItem = (id) => {
    dispatch({type:REMOVE_ITEM, payload:{id}})
    //let newPeople = people.filter((person) => person.id !== id);
    //setPeople(newPeople);
  };


  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={state.people.length < 1 ? resetList : clearList}
      >
        {state.people.length < 1 ? "Reset" : "clear items"}
      </button>
    </div>
  );
};

export default ReducerBasics;
