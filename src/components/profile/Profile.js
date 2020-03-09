import React from "react";
// import css from "./Profile.module.css";
import ProfileInfo from "./profileInfo/ProfileInfo.js";
import css from "./Profile.module.css";
import MypostContainer from "./MyPosts/MypostContainer.js";

const Profile = props => {
  return (
    <div className={css.wrapper}>
      Main content is here
      <ProfileInfo />
      <MypostContainer store={props.store} />
    </div>
  );
};

export default Profile;
