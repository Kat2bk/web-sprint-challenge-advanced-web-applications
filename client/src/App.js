import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
      <h1>Welcome to the Bubble App!</h1>
        <Link to="/">Login</Link>
        <Link to="/protected">Bubble Page</Link>
        <Switch>
        <PrivateRoute exact path="/protected" component={BubblePage} />
        <Route exact path="/" component={LoginForm} />
        </Switch>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
