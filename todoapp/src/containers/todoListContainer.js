import React , {Component, useEffect } from 'react';
import {connect} from 'react-redux';
import {filterBucket, editTodo, deleteTodo} from '../actions/actions';
import TodoList from '../components/TodoList';
import AddTodo from "../components/addTodo";

class TodoListContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            bucketList: [],
            bucketValue: '',
            reRender: false
        };
        this.fetchBucket = this.fetchBucket.bind(this);
        this.setBucketValue = this.setBucketValue.bind(this);
        this.toggleTodoList = this.toggleTodoList.bind(this);
    }

    componentDidUpdate() {
        this.fetchBucket();
    }



    toggleTodoList(){
        const {dispatch} = this.props;
        if(this.state.bucketValue && this.state.bucketValue !== ''){
            dispatch(filterBucket(this.state.bucketValue))
        }
    }

    fetchBucket(){
        const { todos } = this.props;
        todos.map(todo =>{
            if(this.state.bucketList.indexOf(todo.list) === -1){
                this.setState({
                    bucketList: [...this.state.bucketList,todo.list]
                })
            }
        })
    }

    setBucketValue(e){
        console.log(e.target.value);
        if(e.target.value && e.target.value !== ''){
            const {dispatch} = this.props;
            if(e.target.value && e.target.value !== ''){
                dispatch(filterBucket(e.target.value))
            }
        }
    }
    render(){
        return(
            <div>
                <AddTodo />
                <div>
                    <select value={this.state.bucketValue} onChange={this.setBucketValue}>
                        {this.state.bucketList && this.state.bucketList.map((value,key)=>{
                            return(
                                <option value={value} key={key}>{value}</option>
                            )
                        })
                        }
                    </select>
                </div>
                <TodoList todos={this.props.todos} bucketValue={this.state.bucketValue} dispatch={this.props.dispatch}/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    todos: state.todo
});

export  default connect(
    mapStateToProps
)(TodoListContainer);