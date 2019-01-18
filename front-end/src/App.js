import React, { Component } from "react";
import NavBar from "./components/navbar/Navbar.js";
import SideDrawer from "./components/navbar/SideDrawer/SideDrawer.js";
import Backdrop from "./components/navbar/Backdrop/Backdrop.js";
import Main from "./components/Main.js";
import "./App.css";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleHandler = () => {
    this.setState(prevsState => {
      return { sideDrawerOpen: !prevsState.sideDrawerOpen };
    });
  };

  backdropHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <NavBar drawerClick={this.drawerToggleHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <div style={{ marginTop: "60px" }}>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
