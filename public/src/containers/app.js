import React, {Component} from "react";
import {render} from 'react-dom'
import TodoList from './todo-list'
import AddTodo from './add-todo'
import Footer from './footer'
import { Card } from 'antd'
import TodoRevise from './TodoRevise'
import TodoQuery from './TodoQuery'


class App extends Component{
	constructor(){
		super();
	}


	reviseTodo(todo,index,timeId){
		console.log(this.refs.modal);
        this.refs.modal.showModal();
        //
    }

    closeDialog(){
        document.getElementById('reviseinput').value = '';
        this.refs.modal.setState({
          visible: false
        });
    }

    render() {
        return (
        	<Card className="pannel">
	            <div>
	                <AddTodo/>
	                <TodoList reviseTodo={action.reviseTodo}/>
	                <TodoQuery/>
	                <TodoRevise ref="modal" closeDialog={this.closeDialog.bind(this)}/>
	            </div>
	        </Card>
        )
    }
}

export default App;
