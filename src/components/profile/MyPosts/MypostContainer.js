import React from "react";
import {
  addPostActionCreator,
  updatePostTextActionCreator
} from "../../redux/profile_reducer";
import Mypost from "./Mypost.js";

const MypostContainer = props => {
  let state = props.store.getState();
  console.log("state=>", state);

  const addPost = () => {
    // props.addPost();
    props.store.dispatch(addPostActionCreator());
  };
  let onPostChange = text => {
    // let action = { type: "UPDATE-POST-TEXT", payload: text };
    // props.dispatch(updatePostTextActionCreator(text));
    let action = updatePostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Mypost
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MypostContainer;
