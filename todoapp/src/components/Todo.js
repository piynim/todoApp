import React from 'react';

const Todo = ({onClick, todo}) => (
    <React.Fragment>
        {todo && <li onClick={onClick}> {todo.text} <checkBox value={todo.completed}/></li>}
    </React.Fragment>
);

export default Todo;
