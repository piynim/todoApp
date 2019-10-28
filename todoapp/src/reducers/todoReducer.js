import {
    ADD_TODO, EDIT_TODO, FILTER_BUCKET, DELETE_TODO, GET_TODO
} from "../actions/actions";

const initialState = {
    todos: []
};
function todoApp(state = [], action){
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,{
                    id: action.id,
                    description: action.text,
                    completed: false,
                    list: action.bucket
                }
            ];
        case EDIT_TODO:
            console.log(action)
            return state.map(todo =>{
                return todo.id === action.id? { ...todo, completed: !todo.completed}: todo
            });
        case FILTER_BUCKET:
            return  state.filter(todo => {
                return todo.list === action.list
            });
        case DELETE_TODO: return state.filter( todo => (todo.id !== action.id));

        default:
            return state;
    }
}

export default todoApp;