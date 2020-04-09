import React from "react";
// import css from "./Profile.module.css";
import ProfileInfo from "./profileInfo/ProfileInfo.js";
import css from "./Profile.module.css";

const Profile = props => {
  return (
    <div className={css.wrapper}>
      Main content is here
      <ProfileInfo profile={props.profile} />
      {/* <MypostContainer /> */}
    </div>
  );
};

export default Profile;
