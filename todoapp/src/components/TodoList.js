import React, {useEffect} from 'react';
import Todo from './Todo';
import {filterBucket} from "../actions/actions";

const TodoList = ({todos, dispatch, bucketValue}) =>{
    useEffect(() => {
        if(bucketValue && bucketValue !== ''){
            dispatch(filterBucket(bucketValue))
        }
    },[]);
    return (<ul>
        {todos!==undefined && todos.map(todo =>(
            <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
        ))}
    </ul>)
};

export default TodoList;
