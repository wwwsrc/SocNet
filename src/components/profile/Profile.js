import React from "react";
// import css from "./Profile.module.css";
import ProfileInfo from "./profileInfo/ProfileInfo.js";
import MypostContainer from "./MyPosts/MypostContainer.js";
import css from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={css.wrapper}>
      Main content is here
      {console.log(props)}
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MypostContainer />
    </div>
  );
};

export default Profile;
