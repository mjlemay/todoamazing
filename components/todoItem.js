import styled from'styled-components';
import Checkbox from '../svg/checkbox';
import Close from '../svg/close';
import Uncheckbox from '../svg/uncheckbox';
import React, {useContext} from 'react';
import {TodolistContext} from '../context/todolistContext';

const TodoItemRow = styled.li`
  display: block;
  position: relative;
  cursor: pointer;

  .button {
    opacity:0;
  }

  &:hover {
    .button {
      opacity: 0.3;
    }
  }
`;

const SvgBox = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
    &.button {
      width: 15px;
      height: 15px;
      svg {
        position: absolute;
        top: 0;
        min-height: 15px;
        min-width: 15px;
      }
    }
    
    svg {
      min-height: 30px;
      min-width: 30px;
    }
`;

const TodoLabel = styled.div`
  display: inline-block;
  vertical-align: top; 
  line-height: 30px;
  white-space: nowrap;
  padding: 0 10px;
`;

const TodoItem = ({
    id,
    label,
    completed
  }) => {
    // if there is a date stamp set boolean value for now
    const isChecked = completed ? true : false;
    const {dispatch} = useContext(TodolistContext);

    //our checkbox handker
    const handleCheck = e => {
      e.preventDefault();
      const completed = isChecked ? null : new Date().toISOString();
      console.log('id', id);
      dispatch({type: 'UPDATE_TODO', todo: {id, completed}});
    }

    //our remove handler
    const handleRemove = e => {
      e.preventDefault();
      dispatch({type: 'REMOVE_TODO', todo: {id}});
    }

    return (
      <TodoItemRow
        className={id}
      >
        <SvgBox
          onClick={handleCheck}
        >
          {isChecked ? <Checkbox /> : <Uncheckbox />}
        </SvgBox>
        <TodoLabel 
          onClick={handleCheck}
        >
          {label}
        </TodoLabel>
        <SvgBox
          className={'button'}
          onClick={handleRemove}
        >
          <Close />
        </SvgBox>
      </TodoItemRow>
    )
    };
  
  export default TodoItem;