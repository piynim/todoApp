import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from "../actions/actions";

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            bucket: '',
            text: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setBucket = this.setBucket.bind(this);
        this.setText = this.setText.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.text && this.state.bucket){
            this.props.dispatch(addTodo(this.state));
            this.setState({
                text: '',
                bucket: ''
            });
        }
        else{
            alert('empty text or bucket')
        }
    }
    setText(e){
        e.preventDefault();
        if(e.target.value){
            this.setState({
                text: e.target.value
            });
        }
    }
    setBucket(e){
        e.preventDefault();
        if(e.target.value){
            this.setState({
                bucket: e.target.value
            })
        }
    }

    render(){
        return (
            <div>
                <form>
                    <label>Todo description</label>
                    <input onChange={this.setText} value={this.state.text}/>
                    <label> enter bucket </label>
                    <input onChange={this.setBucket} value={this.state.bucket}/>
                    <button onClick={this.handleSubmit} >add todo</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state)=>(
    {todos: state.todos}
);
export default connect(mapStateToProps)(AddTodo)