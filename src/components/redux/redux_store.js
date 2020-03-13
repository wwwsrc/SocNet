import { createStore, combineReducers } from "redux";
import profileReducer from "./profile_reducer";
import messagesReducer from "./messages_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebarUser: sidebarReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

export default store;
