import logo from "../shared/images/logo.svg";
import Login from "../components/Login/Login";
import Header from "../components/Header/Header.jsx";
import Home from "../Pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import movies from "../Pages/Movies/movies";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login" component={Login}>
        </Route>
        <Route exact path="/movies" component={movies}>
        </Route>
      </Switch>
      
    </BrowserRouter>
    
  );
}

export default App;
