import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
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


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
