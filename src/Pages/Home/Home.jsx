import React, { Component } from 'react';
import logo from '../../shared/images/Chillflix.png'; 


class Home extends Component  {
   
    render(){
        return(
            
<div className="div-container" >
<img src={logo} alt="logo" class="logo"/>

<h1 class="title">Peliculas y series</h1>

   
</div>
         
        );
    }
};

export default Home;