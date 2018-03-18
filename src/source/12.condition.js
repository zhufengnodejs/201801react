import React from 'react';
import ReactDOM from 'react-dom';

function UserGreeting() {
    return <h1>欢迎回来</h1>
}

function GuestGreeting() {
    return <h1>请登录</h1>
}

function Greeting(props) {
    if (props.isLoggedIn) {
        return <UserGreeting/>
    } else {
        return <GuestGreeting/>
    }
}

function LoginButton(props) {
    return <button onClick={props.xx}>登录</button>
}

function LoginOutButton(props) {
    return <button onClick={props.xx}>退出</button>
}
//如果 props.isLoggedIn=true不显示任何东西，如果为false的话提示它登录
function Greeting2(props){
   if(props.isLoggedIn == true){
       return null;
   }
   return (
       <div>请登录</div>
   )
}
class LoginCtrl extends React.Component {
    constructor() {
        super();
        this.state = {isLoggedIn: false};
    }

    switch = () => this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))

    render() {
        let button = this.state.isLoggedIn ?
            <LoginOutButton xx={this.switch}/> :
            <LoginButton xx={this.switch}/>;
        return (
            <div>
                <Greeting2 isLoggedIn={this.state.isLoggedIn}/>
                {button}
            </div>
        )
    }
}

ReactDOM.render(<LoginCtrl/>, document.getElementById('root'));