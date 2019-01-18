import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <header className="navbar">
        <nav className=" navbar-navigation">
          <div className="toggle-button">
            <DrawerToggleButton click={this.props.drawerClick} />
          </div>
          <div className="navbar-logo">
            <Link to="/">1008 loxford</Link>
          </div>
          <div className="space" />
          <div className="navigation-items">
            <ul>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
