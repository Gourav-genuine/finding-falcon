import React, { Component } from "react";
import Dropdown from "./Dropdown";
import FetchData from "./FetchData";
import Header from "./Header";
import ResultSuccess from "./ResultSuccess";
import ResultFailure from "./ResultFailure";
import { Route, Switch, useLocation } from "react-router-dom";

import Container from "@material-ui/core/Container";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Switch>
          <Route path="/ResultSuccess">
            <ResultSuccess/>
          </Route>
          <Route path="/ResultFailure">
            <ResultFailure />
          </Route>
          <Route path="/">
            <Header />
            <Container>
              <div className=" d-flex justify-content-center py-5">
                <h4>Finding Falcon</h4>
              </div>
              <FetchData />
            </Container>
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
