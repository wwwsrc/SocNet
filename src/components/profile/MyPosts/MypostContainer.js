import React from "react";
import {
  addPostActionCreator,
  updatePostTextActionCreator
} from "../../redux/profile_reducer";
import Mypost from "./Mypost.js";
import { connect } from "react-redux";

// const MypostContainer = props => {
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         let state = store.getState();
//         console.log("tut", props.store);

//         const addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };
//         let onPostChange = text => {
//           let action = updatePostTextActionCreator(text);
//           store.dispatch(action);
//         };

//         return (
//           <Mypost
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updatrNewPostText: text => {
      dispatch(updatePostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  };
};

const MypostContainer = connect(mapStateToProps, mapDispatchToProps)(Mypost);

export default MypostContainer;
