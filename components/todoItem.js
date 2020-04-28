import PropTypes from 'react';
import styled from'styled-components';
import Checkbox from '../svg/uncheckbox';
import Close from '../svg/close';
import Uncheckbox from '../svg/uncheckbox';


const TodoItemRow = styled.li`
  display: block;
  position: relative;

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
    key,
    label,
    isChecked
  }) => (
    <TodoItemRow
      key={key}
    >
      <SvgBox
      >
        {isChecked ? <Checkbox /> : <Uncheckbox />}
      </SvgBox>
      <TodoLabel>
        {label}
      </TodoLabel>
      <SvgBox
        className={'button'}
      >
        <Close />
      </SvgBox>
    </TodoItemRow>
  );
  
  export default TodoItem;