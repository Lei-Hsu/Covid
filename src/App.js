import React from "react";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import BoardPage from "./pages/BoardPage";
import SearchPage from "./pages/SearchPage";
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
          <Route path="/board">
            <BoardPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
        <Footer />
      </Root>
    </HashRouter>
  );
}

export default App;
