import store from "./components/redux/state";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// import { addPost } from "./components/redux/state";
// import { updateNewPostText } from "./components/redux/state";
console.log(store.getState());
let renderTree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
renderTree(store.getState());

store.subscribe(renderTree);
// serviceWorker.unregister();
