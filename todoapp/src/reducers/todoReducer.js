import {
    ADD_TODO, EDIT_TODO, FILTER_BUCKET, DELETE_TODO, GET_TODO
} from "../actions/actions";

const initialState = {
    bucket: 'default bucket',
    todos: []
};
function todoApp(state = initialState, action){
    switch (action.type) {
        case GET_TODO:
            return {
                todos : state.todos
            };
        case ADD_TODO:
            return Object.assign({},state,{
            id: action.id,
            description: action.text,
            completed: false,
            list: action.list
        });
        case EDIT_TODO:
            return state.map(todo =>{
                return todo.id===action.id? { ...todo, completed: !todo.completed}: todo
            });
        case FILTER_BUCKET:
            return  state.filter(todo => {
                return todo.bucket === action.bucket
            });
        case DELETE_TODO: return state.filter( todo => (todo.id !== action.id));

        default:
            return state;
    }
}

export default todoApp;