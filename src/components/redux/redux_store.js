import { createStore, combineReducers } from "redux";
import profileReducer from "./profile_reducer";
import messagesReducer from "./messages_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebarUser: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = createStore(reducers);
window.store = store;

export default store;
