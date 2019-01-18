import React, { Component } from "react";
import "./projects.css";
import { Link } from "react-router-dom";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="project-page">
        <h1 className="heading">Projects</h1>
        <ul className="contain">
          <Link to="/solar">
            <li className="item">Solar</li>
          </Link>
          <li className="item">Servo Turner</li>
          <li className="item">3</li>
        </ul>
      </div>
    );
  }
}

export default Projects;
