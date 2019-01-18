import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Solar from "./Solar";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/solar" component={Solar} />
    </Switch>
  );
};

export default Main;
