import TodoItem from './TodoItem';
import React, {useContext} from 'react';
import {TodolistContext} from '../context/todolistContext';

const TodoList = () => {

    const {todos} = useContext(TodolistContext);

    return(
        <ul>
            {todos && todos.map( todo => {
                   return (
                    <TodoItem key={todo.id}
                        label={todo.label}
                        check
                    />
                   )
                }
            )
            }
        </ul>
    )
}
  
export default TodoList;