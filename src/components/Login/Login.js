import React, { Component } from 'react';
import Input from '../../shared/Components/Input/input';
import './stylesLogin.css';

class Login extends Component  {
    state = {
        email: "caca",
        password:"*******"
    }
    render(){
        return(
            
<div className="div-container" >
    <form action="submit" className="login-container">
        <Input name="UserName" placeholder={this.state.email} type="text"/>
        <Input name="Password" placeholder={this.state.password} type="password"/>
        
        <input type="button" value="Click me"/>
    </form>   
</div>
            
        );
    }
};

export default Login;
