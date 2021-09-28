import React from "react";
import "./App.css";
import Home from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignInPage from "./pages/signin";

function App() {
  return (
    <BrowserRouter>
      {/* <Home /> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
