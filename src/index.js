import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Landing from "views/HomePage";
import Gallery from "views/Gallery";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/gallery" component={Gallery} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
