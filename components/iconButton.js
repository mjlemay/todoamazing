import styled from'styled-components';

const TodoButton = styled.button`
    font-size: 1.25rem;
    padding: 0.25rem;
    border: 2px solid #ddd;
    border-radius: 0.25rem;
    margin: 0 0.5rem;
    user-select: none; 
    
    &:hover {
        border: 2px solid #eee;
    }
    &:active {
        border: 2px solid #333;
    }
    &:focus {
        outline: none;
        outline-width: 0;
    }
`;


//button with icon for text
const IconButton = props => {
    return (
        <TodoButton>{props.children}</TodoButton>
    );
}
 
export default IconButton;