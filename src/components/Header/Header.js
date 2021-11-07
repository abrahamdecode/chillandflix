import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div >
          <nav className="header-container">
            <a href="#">Home</a>
            <a href="">About</a>
            <a href="">Gallery</a>
            <a href="">Contact</a>
          </nav>
        </div>
      </header>
    );
  }
}
export default Header;
