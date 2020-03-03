import React from "react";
// import css from "./Profile.module.css";
import ProfileInfo from "./profileInfo/ProfileInfo.js";
import Mypost from "./MyPosts/Mypost";
import css from "./Profile.module.css";

const Profile = props => {
  return (
    <div className={css.wrapper}>
      Main content is here
      <ProfileInfo />
      <Mypost
        profilePage={props.profilePage}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
