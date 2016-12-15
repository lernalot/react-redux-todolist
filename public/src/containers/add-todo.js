'use strict';
import React,{Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import ReactDOM from "react-dom";
import { Input } from 'antd';
import { Button } from 'antd';
import { message } from 'antd';
import { Alert } from 'antd';

class AddTodo extends Component{
    handlerKeyUp(event){
        if(event.keyCode === 13){
            let value = event.target.value;
            let timeId = new Date().getTime();

            if(!value) return false;

            let newTodoItem = {
                text: value,
                timeId:timeId,
                lastReviseTime:'尚未修改'
            };
            this.props.onAdd(newTodoItem);
            event.target.value = "";
        }
    }
    render(){
        return (
            <div>
                <Input id="inputva" ref="task" onKeyUp={this.handlerKeyUp.bind(this)} type="text" placeholder="回车或者点击增加按钮增加，点击增加按钮可同样内容重复增加"/>
                <Button>增加</Button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
   return {
       onAdd:(task)=>{dispatch({type:"ADD",task})}
   }
}

export default connect(()=>{return {}},mapDispatchToProps)(AddTodo);