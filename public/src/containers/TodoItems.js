'use strict';
import React from 'react';
import ReactDom from 'react-dom';
//import TodoRevise from './TodoRevise.js';

import {  Input } from 'antd';
import { Button } from 'antd';
import { Checkbox } from 'antd';
export default class TodoItem extends React.Component{


    constructor(){
        super();
        this.state = {
            checkAll:false,
            btnDisplay:'display-none'
        }
    }

    handlerMouseOver(){
        this.setState({
            btnDisplay:'display-line'
        });
    }

    // 鼠标移出
    handlerMouseOut(){
        this.setState({
            btnDisplay:'display-none'
        });
    }

    // 删除当前任务
    handlerDelete(){
        this.props.deleteTodo(this.props.timeId);
        console.log(this.props.timeId);
    }
    reviseTodo(){
        this.props.reviseTodo(this.props.text,this.props.index,this.props.timeId);
    }

    render(){
        let doneStyle = this.props.isDone ? {color: 'red'} : {color: '#57c5f7'};
        let btnDisplay = this.state.btnDisplay;

        return (
            <li
                onMouseOver={this.handlerMouseOver.bind(this)}
                onMouseOut={this.handlerMouseOut.bind(this)}
                ref='checkList'
            >
                <span style={doneStyle} className="listContent">{this.props.text}</span>
                <Button ref="deleteBtn" onClick={this.handlerDelete.bind(this)} className={"fr libtn-height "+btnDisplay}>删除</Button>
                <Button ref="changeBtn" className={"change libtn-height "+btnDisplay}onClick={this.reviseTodo.bind(this)}>修改</Button>
                <span className='product-time'>创建时间：{this.props.timeId}</span><span className='revise-time'>最后修改时间：{this.props.lastReviseTime}</span>
            </li>
        )
    }
}



//<Checkbox type="checkbox" onChange={this.handlerChange.bind(this)} id="check-box"></Checkbox>

