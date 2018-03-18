import React from 'react';
import ReactDOM from 'react-dom';
class Toggle extends React.Component{
    constructor(){
        super();
        this.state = {isToggle:true};
    }
    //如果是用普通函数的话this指向undefined
    handleClick=()=>{
        this.setState(newState=>({isToggle:!newState.isToggle}));
    }
    render(){
        return (
            <button onClick={(e)=>this.handleClick(e)} >
                {this.state.isToggle?'关闭':'打开'}
            </button>
        )
    }
}
ReactDOM.render(<Toggle/>, document.getElementById('root'));
