import store from "./components/redux/redux_store";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

// import { addPost } from "./components/redux/state";
// import { updateNewPostText } from "./components/redux/state";
console.log(store.getState());
let renderTree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App
        // state={state}
        // dispatch={store.dispatch.bind(store)}
        // store={store}
        />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};
renderTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderTree(state);
});
// store.subscribe(renderTree);
// serviceWorker.unregister();
