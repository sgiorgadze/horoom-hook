import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Horoom from "./components/Horoom";
import BasianiMainPage from "./components/BasianiMainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/horoom">
          <Horoom />
        </Route>
        <Route path="/basiani">
          <BasianiMainPage />
        </Route>
        <Redirect to="/horoom" />
      </Switch>
    </Router>
  );
}

export default App;
