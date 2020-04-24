import PropTypes from 'react';
import Checkbox from '../svg/uncheckbox';
import Close from '../svg/close';
import Uncheckbox from '../svg/uncheckbox';

const TodoItem = ({
    handleClick,
    handleRemove,
    todoId,
    label,
    isChecked
  }) => (
    <li
      key={todoId}
    >
      <span
        onClick={handleClick ? () => handleClick(todoId) : null}
      >
        {isChecked ? <Checkbox /> : <Uncheckbox />}
        {label}
      </span>
      <span
        onClick={handleRemove ? () => handleRemove(todoId) : null}
      >
        <Close />
    </span>
    </li>
  );
  
  TodoItem.propTypes = {
    handleClick: PropTypes.func,
    handleRemove: PropTypes.func,
    todoId: PropTypes.string,
    label: PropTypes.string,
    isChecked: PropTypes.bool
  };
  
  export default TodoItem;