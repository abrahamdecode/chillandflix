import React, { Component } from 'react';
import Input from '../../shared/Components/Input/input';
import logo from '../../shared/images/Chillflix.png'; 
import './stylesLogin.css';

class Login extends Component  {
    state = {
        email: "useaname@gmai.com",
        password:"***********"
    }
    render(){
        return(
            
<div className="div-container" >
<img src={logo} alt="logo" class="logo"/>

<h1 class="title">Create a new password</h1>
<p class="subtitle">Enter a new password for your account</p>
    <form action="submit" className="form-container">
        <Input name="Email" placeholder={this.state.email} type="text"/>
        <Input name="Password" placeholder={this.state.password} type="password"/>
        
        <input type="button" value="Register" className="Login-Button"/>
    </form>   
</div>
         
        );
    }
};

export default Login;
