import React from "react";
import css from "./Post.module.css";
const Post = props => (
  <>
    {props.postData.map(elem => (
      <div key={elem.id} className={css.item}>
        <img
          src="https://i.pinimg.com/originals/62/29/3c/62293c472f85dabe94848ae5618f4854.jpg"
          alt="avatar"
        ></img>
        {elem.message}
        <div>
          <span className={css.like}> ♥{elem.likesCount}</span>
        </div>
      </div>
    ))}
  </>
);

export default Post;
