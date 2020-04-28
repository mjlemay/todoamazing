import React, {createContext, Component, useReducer, useEffect} from 'react';
import {todolistReducer} from '../reducers/todolistReducer';

export const TodolistContext = createContext();

const TodolistContextProvider = props => {
    const {children} = props;
    const hasLocalStorage = typeof localStorage !== 'undefined';
    const [todos, dispatch] = useReducer(todolistReducer, [], () => {
        const localData = hasLocalStorage && localStorage.getItem('todos') || null;
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        hasLocalStorage && localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <TodolistContext.Provider 
            value={
                {
                    todos,
                    dispatch
                 }
            }
        >
            {children}
        </TodolistContext.Provider>
    );
}

export default TodolistContextProvider;