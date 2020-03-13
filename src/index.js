import store from "./components/redux/redux_store";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

// import { addPost } from "./components/redux/state";
// import { updateNewPostText } from "./components/redux/state";
// console.log(store.getState());

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

// store.subscribe(renderTree);
// serviceWorker.unregister();
