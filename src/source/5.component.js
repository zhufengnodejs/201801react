import React from 'react';
import ReactDOM from 'react-dom';
//函数就是一个合法的组件 props属性对象
function Welcome(props){
    console.log(props);//{name: "zfpx", age: "8"}
    return (
      <h1>
          hello {props.name}
      </h1>
  )
}

function App(){
    return (
        <div>
            <Welcome name="zfpx1"/>
            <Welcome name="zfpx2"/>
            <Welcome name="zfpx3"/>
        </div>
    )
}
/**
 * 组件的运行方式
 * 1. render发现一个用户自定义组件,如果标签名是以大写字母开头就是用户自定义组件，如果小写字母开头就是DOM组件
 * The tag <welcome> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
 * welcome标签在浏览器不能识别。如果你想要渲染一个react组件，请用大写字母开头命名它
 * 2.先把JSX的属性封装成一个props对象 {name:"zfpx",age:"8"}
 * 3.把它作为参数传递给Welcome函数，获取到一个返回值，返回值是一个React元素
 * 4.render方法会把此react元素渲染到页面上 antdesign+imutablejs+mobx+docker 博客 论坛
 *
 *
  */
ReactDOM.render(<App/>, document.getElementById('root'));