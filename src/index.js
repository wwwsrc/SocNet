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
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
renderTree(store.getState());

store.subscribe(renderTree);
// serviceWorker.unregister();
