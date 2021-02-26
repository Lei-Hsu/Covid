import React from "react";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import Board from "./pages/Board";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter, Switch, Route } from "react-router-dom";

const Root = styled.div``;

function App() {
  return (
    <HashRouter>
      <Root>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/board">
            <Board />
          </Route>
        </Switch>
        <Footer />
      </Root>
    </HashRouter>
  );
}

export default App;
