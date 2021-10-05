import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import HatCompo from "./productCompo/HatCompo";
import JacketCompo from "./productCompo/JacketCompo";
import SneakersCompo from "./productCompo/SneakersCompo";

import Container from "./Container";
class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink to="/">home</NavLink>
          <NavLink to="/">login</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" render={() => <Container />} />
          <Route exact path="/Hat" render={() => <HatCompo />} />
          <Route exact path="/Sneakers" render={() => <SneakersCompo />} />
          <Route exact path="/Jackets" render={() => <JacketCompo />} />
        </Switch>
      </div>
    );
  }
}

export default App;
