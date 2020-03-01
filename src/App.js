import React from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import Nav from "./components/nav/Nav.js";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Setting from "./components/settings/Settings";
import { Route, BrowserRouter } from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          {/* <Route path="/dialogs" component={Dialogs} /> */}
          <Route path="/profile">
            <Profile postData={props.postData} />
          </Route>
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                userData={props.userData}
                messageData={props.messageData}
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
    </BrowserRouter>
  );
};

export default App;
