import React,{Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

class Footer extends Component{

    render(){
        let btnName = ['ALL','ACTIVE','COMPLETED'].map((name,index)=>
            <a key={index}
            style={{textDecoration:this.props.name === name ? 'underline':''}}
            onClick={this.props.onSetName.bind(this,name)}>
                {name}{" "} </a>);

        return (
            <div>{btnName}</div>
        )
    }
}

function mapStateToProps(state) {
    return {
       name:state.name
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSetName:(name)=> {dispatch({type:"SELECTNAME",name})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer);