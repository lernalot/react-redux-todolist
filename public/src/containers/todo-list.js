import React, {Component} from 'react';
import {render} from 'react-dom'
import {connect} from 'react-redux'

class TodoList extends Component {
    render() {
        const todoItem = this.props.todos
            .map((todo, index)=>
                <div key={index}>
                    <input type="checkbox" checked={todo.isDone} onChange={this.props.onToogle.bind(this, todo.id)}/>
                    {todo.isDone ? <s>{todo.task}</s> : todo.task}
                    <button onClick={this.props.onRemove.bind(this, todo.id)}>x</button>
                </div>);
        return (
            <div>
                {todoItem}
                <button onClick={this.props.onRemoveCompleted}>clear completed</button>
            </div>
        )
    }
}

function select(state) {
    if (state.name === 'ACTIVE') {
        return state.todos.filter(todo => todo.isDone === false);
    } else if (state.name === 'COMPLETED') {
        return state.todos.filter(todo => todo.isDone === true);
    } else {
        return state.todos;
    }
}

function mapStateToProps(state) {
    console.log(select(state));
    return {todos: select(state)};
}

function mapDispatchToProps(dispatch) {
    return {
        onRemove: (id)=> dispatch({type: 'REMOVE', id}),
        onToogle: (id) => dispatch({type: 'TOOGLE', id}),
        onRemoveCompleted: ()=> dispatch({type: 'CLEARCOM'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);