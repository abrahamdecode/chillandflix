import React, { Component } from 'react';
import './Input.css';


const  Input =({name, value, placeholder, type})=>  {
    
     
        return(
            <>
        <label for={name} >{name} </label>
        <input type={type} id={name} placeholder={placeholder}/>
        </>

            
        );
   
};

export default Input;
