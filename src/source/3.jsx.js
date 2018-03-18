import React from 'react';
import ReactDOM from 'react-dom';
// let element = (
//     <h1 className="greeting">
//         hello world
//     </h1>
// );
console.log(element);
 let element  = React.createElement('h1',{
     className:'greeting'
 },'hello world');
 //就是大家常说的虚拟DOM，虚拟DOM并不是真正的DOM，而是一个普通 的JS对象，用来描述 真实的DOM长什么样子
let elementObj = {
    type:'h1',
    props:{
        className:'greeting',
        children:['hello world']
    }
}
ReactDOM.render(element, document.getElementById('root'));