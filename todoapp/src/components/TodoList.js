import React from 'react';
import Todo from './Todo';

const TodoList = (todos, toggleTodo) =>{
    console.log(todos);
    return (<ul>
        {todos!==undefined && todos.todos.map(todo=>(
            <Todo todo={todo} onClick={()=>toggleTodo} />
        ))}
    </ul>)
};

export default TodoList;
