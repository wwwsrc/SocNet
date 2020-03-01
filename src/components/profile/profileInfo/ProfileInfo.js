import React from "react";
import css from "./ProfileInfo.module.css";
// import Mypost from "../MyPosts/Mypost";

const ProfileInfo = () => (
  <div>
    <div>
      <img
        src="https://blog.kniga.biz.ua/wp-content/uploads/2015/12/wallpaper-color-style-background-color-2015959044.jpg"
        width="1000px"
        alt="smt"
      ></img>
    </div>
    <div className={css.descriptionBlock}>
      Ava+description
      <img
        src="https://i7.pngguru.com/preview/748/338/407/computer-icons-avatar-person-user-avatar.jpg"
        width="60px"
        alt="smt2"
      ></img>
    </div>
  </div>
);

export default ProfileInfo;
