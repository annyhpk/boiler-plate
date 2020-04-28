import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import "antd/dist/antd.less";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducers";
import App from "./App";

const store = configureStore({
  reducer: Reducer,
  middleware: [promiseMiddleware, ReduxThunk],
});

const Hot = hot(App);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Hot />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
