import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Profile />
      </div>
      <h3>Hello everybody</h3>

      <logo />
    </>
  );
};

export default App;
