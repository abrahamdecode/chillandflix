import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import logo from '../../shared/images/Chillflix.png'; 

const movies = () => {
    return (
        <>
        <div className="div-container" >
<img src={logo} alt="logo" class="logo"/>
   
</div>
       
       
        <MovieCard/>
      </>
    );
}

export default movies;