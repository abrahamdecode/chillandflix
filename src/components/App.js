import logo from "../shared/images/logo.svg";
import Login from "./Login/Login";
import Header from "./Header/Header.jsx";
import Home from "../Pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
  
    <BrowserRouter>
    <Header/>
         <Switch>
         <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/login" component= {Login}>
      
    </Route>
  </Switch>  
</BrowserRouter>
  );
}

export default App;
