import React , {Component} from 'react';
import {connect} from 'react-redux';
import {filterBucket, editTodo, deleteTodo, getTodo} from '../actions/actions';
import TodoList from '../components/TodoList';
import AddTodo from "../components/addTodo";

class TodoListContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            bucket: '',
            bucketList: []
        };
        this.toggleTodo = this.toggleTodo.bind(this);
        this.fetchBucket = this.fetchBucket.bind(this);
        this.setBucket = this.setBucket.bind(this);
    }

    componentDidMount() {
        this.fetchBucket();
        this.getTodo();
    }

    getTodo(){
        const {dispatch} = this.props;
        dispatch(getTodo());
    }
    deleteTodo(id){
        const {dispatch} = this.props;
        dispatch(deleteTodo(id));
    }

    toggleTodoList(){
        const {dispatch} = this.props;
        if(this.state.bucket && this.state.bucket !== ''){
            dispatch(filterBucket(this.state.bucket))
        }
    }

    toggleTodo(id){
        const {dispatch} = this.props;
        dispatch(editTodo(id))
    }

    fetchBucket(){
        const { todos } = this.props;
        todos.map(todo =>{
            if(!this.state.bucketList.contains(todo.bucket)){
                this.setState({
                    bucketList: [...this.state.bucketList,todo.bucket]
                })
            }
        })
    }

    setBucket(e){
        if(e.target.value && e.target.value !== ''){
            this.setState({
                bucket: e.target.value
            })
        }
    }

    render(){
        return(
            <div>
                <AddTodo />
                <TodoList todos={this.props.todos}/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    todos: state.todos
});

export  default connect(
    mapStateToProps
)(TodoListContainer);