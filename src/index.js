import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Form from "./Form";
import Login from "./Login";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";

const rootEl = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Cadastrar</h2>
      {/* <Form
        onSubmit={values => {
          console.log(values);
        }}
      />
      <App /> */}
      <Login
        onSubmit={values => {
          console.log(values);
        }}
      />
    </div>
  </Provider>,
  rootEl
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
