import React, {useContext, useState} from 'react';
import {TodolistContext} from '../context/todolistContext';
import IconButton from './iconButton';

const todoForm = () => {
    const {dispatch} = useContext(TodolistContext);
    const [label, setLabel] = useState('');
    const [stamp, setStamp] = useState('');

    //our submit handler. Generates a time stamp and uses state values to add a new todo
    const handleSubmit = e => {
      e.preventDefault();
      const created = new Date().toISOString();
      dispatch({ type: 'ADD_TODO', todo: { stamp, label, created }});
      setLabel('');
      setStamp('');
    }
  

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Add something!" value={label}
                onChange={(e) => setLabel(e.target.value)} 
                required
            />
            <IconButton>+</IconButton>
        </form>
    );
}
 
export default todoForm;