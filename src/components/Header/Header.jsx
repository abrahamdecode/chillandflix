import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div >
          <nav className="header-container">
            <Link to="/" className="header-links">Home</Link>
            <Link to="/about" className="header-links">About</Link>
            <Link to="/gallery" className="header-links">Gallery</Link>
            <Link to="/contact" className="header-links">Contact</Link>
            <Link to="/movies" className="header-links">Movies</Link>
            <Link to="/series" className="header-links">Series</Link>
            <Link to="/login" className="header-links">Login</Link>
            
          </nav>
        </div>
      </header>
    );
  }
}
export default Header;
