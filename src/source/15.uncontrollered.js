import React from 'react';
import ReactDOM from 'react-dom';
//受控组件 表单元素的值受组件的状态控制
class Form extends React.Component{
    constructor(props){
        super(props);
    }
    //事件处理函数 事件对象 event并且原生事件对象，而是react自己封装的
    handleSubmit = (event)=>{
        //阻止默认事件
        event.preventDefault();
        //在此我们如果想要得到用户输入的值
        //如果给一个input框赋了一个username的ref值，那么就可以通过this.refs.username获取到它对应的真实DOM元素
        let username = this.username.value;
        let password = this.password.value;
        console.log(username);
        console.log(password);
    }

    render(){
        //ref里如果放的是一个函数，那么此函数会在当此虚拟 DOM转成真实DOM并插入到页面这后立刻调用，参数就是真实DOM
        //比如你要跟第三方的库进行集合
        return (
            <form onSubmit={this.handleSubmit}>
                用户名 <input type="text" ref={input=>this.username=input} />
                密码 <input type="text" ref={input=>this.password=input}/>
                <input type="submit"/>
            </form>
        )
    }
}
ReactDOM.render(<Form/>, document.getElementById('root'));