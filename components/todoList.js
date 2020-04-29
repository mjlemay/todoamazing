import TodoItem from './TodoItem';
import React, {useContext} from 'react';
import {TodolistContext} from '../context/todolistContext';

const TodoList = () => {

    const {todos} = useContext(TodolistContext);

    return(
        <ul suppressHydrationWarning={true}>
            {todos && todos.map( todo => {
                   return (
                    todo && <TodoItem
                        key={todo.id}
                        id={todo.id}
                        label={todo.label}
                        completed={todo.completed}
                    />
                   )
                }
            )
            }
        </ul>
    )
}
  
export default TodoList;