import React from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import Nav from "./components/nav/Nav.js";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Setting from "./components/settings/Settings";
import { Route } from "react-router-dom";

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav sidebarUser={props.state.sidebarUser} />
      {console.log("props.state.sidebarUser", props.state.sidebarUser)}
      <div className="app-wrapper-content">
        {/* <Route path="/dialogs" component={Dialogs} /> */}

        <Route path="/profile">
          <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}
          />
        </Route>
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              userData={props.state.messagesPage.dialogs}
              messageData={props.state.messagesPage.messages}
            />
          )}
        />
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
