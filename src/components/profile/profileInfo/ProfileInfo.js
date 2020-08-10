import React from "react";
import css from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
// import Mypost from "../MyPosts/Mypost";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  // debugger;
  return (
    <div>
      {/* <div>
        <img
          src="https://blog.kniga.biz.ua/wp-content/uploads/2015/12/wallpaper-color-style-background-color-2015959044.jpg"
          width="1000px"
          alt="smt"
        ></img>
      </div> */}
      <div className={css.descriptionBlock}>
        {/* {props.profile ? <img src={props.profile.photos.large} /> : <p>fuck</p>} */}
        <img src={props.profile.photos.large} />
        <ProfileStatus status="hello friend" />
        <p>{props.profile.aboutMe}</p>
      </div>
      <time dateTime="2014-09-25"> 25 Сент 2014</time>
    </div>
  );
};

export default ProfileInfo;
