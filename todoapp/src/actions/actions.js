export const ADD_TODO = 'ADD_TODO';
export const FILTER_BUCKET = 'FILTER_BUCKET';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const GET_TODO = 'GET_TODO';

let todoId = 0;
export function getTodo(){
    return {
        type: GET_TODO
    }
}
export function addTodo({text, bucket}){
    return {
        type: ADD_TODO,
        id: todoId++,
        text,
        bucket
    }
}
export function deleteTodo(id){
    return {
        type: DELETE_TODO,
        id
    }
}

export function editTodo(id){
    return {
        type: EDIT_TODO,
        id
    }
}

export function filterBucket(list){
    return {
        type: FILTER_BUCKET,
        list
    }
}