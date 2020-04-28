import React, {useContext, useState} from 'react';
import {TodolistContext} from '../context/todolistContext';
import styled from'styled-components';
import IconButton from './iconButton';


const TodoInput = styled.input`
    font-size: 1.25rem;
    padding: 0.25rem;
    border: 2px solid #ccc;
    border-radius: 0.25rem;
    text-indent: 1rem;

    &:focus {
        outline: none;
        outline-width: 0;
    }
`;

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
            <TodoInput 
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