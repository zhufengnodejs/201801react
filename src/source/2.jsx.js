import React from 'react';
import ReactDOM from 'react-dom';
let logo = "https://www.baidu.com/img/bd_logo1.png";
let html = "<script>while(true){}</script>";
let element  = (
    <div className="bg">
        <button tabIndex="1">1</button>
        <button tabIndex="3">3</button>
        <button tabIndex="2">2</button>
        <button tabIndex="4">4</button>
        <img src="{logo}" />
        <div>{html}</div>
    </div>
)
ReactDOM.render(element, document.getElementById('root'));