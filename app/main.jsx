import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./reducers/index";
import LoadComponents from "./components/LoadComponents";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <LoadComponents />
    </Router>
  </Provider>,
  document.getElementById("main"))