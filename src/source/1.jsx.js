import React from 'react';
import ReactDOM from 'react-dom';
let user = {
    firstName:'zhufeng',
    lastName:'peixun'
}
function formatUser(user){
    return user.firstName + user.lastName;
}
//{}可以放任意的JSX表达式 表达式就是变量和运算符组合的一个组合。它必须要返回一个值

function greeting(user){
    if(user){
        return <h1>hello {formatUser(user)}</h1>
    }else{
        return <h1>hello stranger</h1>
    }
}
let element = greeting();
ReactDOM.render(element, document.getElementById('root'));


