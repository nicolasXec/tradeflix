import React from "react";
import "./styles.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "antd/dist/antd.css";

// import components here..
import Header from "./component/header/header";

// import pages here
import Home from "./pages/home/home";
import Charts from "./pages/chart/chart";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route default path="/home" component={Home} />
          <Route exact path="/chart" component={Charts} />
        </Switch>
      </Router>
    </div>
  );
}
