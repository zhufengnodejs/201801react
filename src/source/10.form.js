import React from 'react';
import ReactDOM from 'react-dom';
//受控组件 表单元素的值受组件的状态控制
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',//用户名
            password:'',//密码
            description:'个人描述',
            hobby:'sleep'
        }
    }
    //事件处理函数 事件对象 event并且原生事件对象，而是react自己封装的
    handleSubmit = (event)=>{
        //阻止默认事件
        event.preventDefault();
        console.log(this.state);
    }
    //处理变化
    /**
     * 1. 多传一个参数 变量名传过来
     * 2. 箭头函数
     */
    handleChange = (event)=>{
        let name = event.target.name;
        let val = event.target.value;
        if(/[a-zA-Z]+/.test(val)){
            this.setState({[name]:val});
        }else{

        }

    }
    //返回且只能返回一个顶级元素
    /**
     * You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field.
     */
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                用户名 <input name="username" type="text" onChange={e=>this.handleChange(e)} value={this.state.username}/>
                密码 <input name="password" type="text" onChange={e=>this.handleChange(e)} value={this.state.password}/>
                个人介绍 <textarea value={this.state.description} onChange={e=>this.handleChange(e)}></textarea>
                <input type="submit"/>
                爱好<select value={['eat','sleep']}  onChange={e=>this.handleChange('hobby',e)} multiple={true}>
                    <option value="eat">吃饭</option>
                    <option value="sleep">睡觉</option>
                    <option value="football">足球</option>
                    <option value="basketball">篮球</option>
                </select>
            </form>
        )
    }
}
ReactDOM.render(<Form/>, document.getElementById('root'));