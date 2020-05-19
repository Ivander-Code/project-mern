/** Dependencies */
import React from "react";
import ReactDOM from "react-dom";

/** CSS Files */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

/** Components */
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import loadUsers from "./actions/allRecords.action";

/** Dispatch load user info */
store.dispatch(loadUsers());

/** Content Provider */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);