//keys只能数组上下中用
import React from 'react';
import ReactDOM from 'react-dom';
let users  = [
    {id:1,name:'zfpx1'},
    {id:2,name:'zfpx2'}
]
function  User(props){
    console.log(props);
    return <li>{props.user.name}</li>;
}
function Users(props){
  let users = props.users;
  return (
      <ul>
          {
              users.map(user=>(
                 <User id={user.id} key={user.id} user={user}/>
              ))
          }
      </ul>
  )
}
ReactDOM.render(<Users users={users}/>, document.getElementById('root'));