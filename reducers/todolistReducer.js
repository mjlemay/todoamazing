export const todolistReducer = (state, action) => {
    console.log('todo state', state);
  switch (action.type) {
    case 'ADD_TODO':
        console.log('add todo');
        return [...state, {
            label: action.todo.label, 
            stamp: action.todo.stamp, 
            id: `todo_${action.todo.created}`}
        ]
    case 'UPDATE_TODO':
        return state.map(todo => {
            if (todo.id === action.todo.id) {
                return {
                    ...todo,
                    ...action.todo
                }
            }
        })
    case 'REMOVE_TODO':
        return state.filter(todo => todo.id !== action.id);
    default:
        return state;
  }
} 