import React from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0,age:0};
    }
    //这是最好的。
    clickCount=()=>{
        //setState是可能是异步的，另外多个setState有可能会合并
        // this.setState((prevState,props)=>({count:prevState.count + Math.random()}));
        // this.setState((prevState,props)=>({count:prevState.count + props.increment}));

        this.setState((prevState,props)=>({count:prevState.count + Math.random()}),()=>{
            this.setState((prevState,props)=>({count:prevState.count + props.increment}));
            console.log(this.state.count);//0.5
        });
        console.log(this.state.count);//0
    }
    clickAge = ()=>{
     this.setState({age:this.state.age+1});
     // function setState(newState){
     //     let obj = Object.assign({},this.state,newState);
     //     this.state = obj;
     //     this.render();
     // }
    }
    render(){
        return (
            <div>
                <h1>count{this.state.count}</h1>
                <h1>age{this.state.age}</h1>
                <button onClick={this.clickCount}>count+</button>
                <button onClick={this.clickAge}>age+</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter increment={2}/>, document.getElementById('root'));
/**
 * setState批量更新
 */