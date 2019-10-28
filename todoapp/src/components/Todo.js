import React from 'react';
import {deleteTodo, editTodo} from "../actions/actions";

const Todo = ( {todo , onClick, dispatch}) => (
    <React.Fragment>
        {todo && <li
            key={todo.id}
            onClick={onClick}
        >
            <input type='checkbox' value={todo.completed} onChange={() => dispatch(editTodo(todo.id))}/> {todo.description}
        <button onClick={()=>dispatch(deleteTodo(todo.id))}>destory</button></li>}
    </React.Fragment>
);

export default Todo;
