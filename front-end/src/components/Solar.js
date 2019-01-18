import React, { Component } from "react";
import "./solar.css";
import firebase from "firebase";
import { config } from "../config";
import Graph from "./graph/Graph";

let app = firebase.initializeApp(config);
let database = app
  .database()
  .ref()
  .child("values");

class Solar extends Component {
  state = {
    voltage: 0,
    amps: 0,
    watts: 0,
    graphdata: []
  };

  graphdata = [];

  //runs if the component mounts succesfully. If the data has changed, the listener remounts the component
  componentDidMount() {
    this.valueChangeCallback = database.on("value", snap => {
      this.setState({
        voltage: snap.child("Voltage").val(),
        amps: snap.child("mA").val(),
        watts: snap.child("Watts").val()
      });
    });
  }

  componentWillUnmount() {
    // If a valueChangeCallback exists from former mount then end listener
    if (this.valueChangeCallback) {
      database.on("value", this.valueChangeCallback);
      this.deregisterCallback = "";
    }
  }

  render() {
    return (
      <div>
        <div className="background">
          <div className="data-holder">
            <h1>Voltage</h1>
            <h1>{this.state.voltage}</h1>
          </div>
          <div className="data-holder">
            <h1>Amps</h1>
            <h1>{this.state.amps} mA</h1>
          </div>
          <div className="data-holder">
            <h1>Watts</h1>
            <h1>{this.state.watts} mW</h1>
          </div>
        </div>
        <div>
          <Graph />
        </div>
      </div>
    );
  }
}

export default Solar;
