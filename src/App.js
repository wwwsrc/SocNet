import React from "react";
import "./App.css";
import HeaderContainer from "./components/header/HeaderContainer.js";
import Nav from "./components/nav/Nav.js";
import ProfileContainer from "./components/profile/ProfileContainer";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Setting from "./components/settings/Settings";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Friends from "./components/nav/Friends";
import Login from "./components/login/login";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />

      <div className="app-wrapper-content">
        {/* <Route path="/dialogs" component={Dialogs} /> */}

        <Route path="/profile/:userId?">
          <ProfileContainer />
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
        <Route path="/login" component={Login} />
        {/* <Route path="/friends" component={Friends} /> */}
      </div>
    </div>
  );
};

export default App;
