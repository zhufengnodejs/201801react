import React from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component{
    constructor(props){
        super(props);
        //在构造函数内部定义初始始的状态
        this.state = {date:new Date()};
        this.tick = this.tick.bind(this);
    }
    //组件挂载完成，当react把一个虚拟的DOM转成真实的DOM之后，会执行此方法
    /**
     * 处理this有以下几种方法
     * 1. bind  this.bind(this)
     * 2. 使用方法调用  ()=>this.tick()
     * 3. 定义tick的时候使用属性初始化 this.tick
     * 4. 在构造函数里bind
     */
    componentDidMount(){
        //在生命周期函数中，this是指向前当前组件实例
        this.timerID = setInterval(this.tick,1000);
    }
    //ES7属性初始化,就相当于绑定了this指针了
    tick(){
        //如果你想修改本地状态，也主是当前组件的状态，必须要用this.setState,因为调用了此方法之后，react会调用render方法根据最新的状态进行重新渲染
        //this.setState({date:new Date()})
        //1. 永远不要直接修改state,因为这样的话不会重新调用render方法，界面也不会刷新。那么状态和UI表现不一致
        this.state.date = new Date();
    }
    //当React准备销毁一个组件时，会先调用此方法，进行一些资源的释放和清理工作
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    //定义此组件如何渲染，其实就是要返回一个react元素
    render(){
        return (
            <div>
                <h1>hello</h1>
                <h2>{this.state.date.toLocaleString()}</h2>
            </div>
        )
    }
}

/**
 * 类组件的渲染过程
 * 1. 当我们把Clock组件传递给render 方法后
 * 2. 先封装props属性对象
 * 3. 找到Clock类的定义，然后实例化Clock的实例  new Clock(props)
 * 4. 调用Clock类实例的render方法，得到返回的render元素
 * 5. 把此react元素渲染到页面中去，变成真实DOM
 * 6. 当渲染完成会调用didMount方法创建一个定时器赋给实例的timerID属性
 * 7. 每秒钟，调用一次tick改变一次state,state改变 之后会触发重新render.
 *
 */
function tick(){
    ReactDOM.render(<Clock name="zfpx"/>, document.getElementById('root'));
}
setInterval(tick,1000);
