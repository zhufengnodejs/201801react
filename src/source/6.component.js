import React from 'react';
import ReactDOM from 'react-dom';
//Objects are not valid as a React child
//对象并不是合法的React子元素
function formatDate(date){
    return date.toString();
}
function Avatar(props){
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    )
}
function UserInfo(props){//{user}
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
let data = {
    author:{
        name:'zfpx',
        avatarUrl:'https://www.baidu.com/img/bd_logo1.png'
    },
    text:'评论内容',
    date:new Date()
}
//把data中的所有属性一一传递给Comment
ReactDOM.render(<Comment {...data}/>, document.getElementById('root'));