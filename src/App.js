import React from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import Nav from "./components/nav/Nav.js";
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Setting from "./components/settings/Settings";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />

      <div className="app-wrapper-content">
        {/* <Route path="/dialogs" component={Dialogs} /> */}

        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users">
          <UsersContainer />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Setting} />
      </div>
    </div>
  );
};

export default App;
