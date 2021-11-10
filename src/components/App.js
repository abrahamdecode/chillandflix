import logo from '../shared/images/logo.svg';
import Login from './Login/Login';
import Header from './Header/Header';
import {BrowserRouter, Switch, Route }from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Header/>
    
    <Login />
    </>
  );
}

export default App;
