import React from "react";
import Post from "./Post/Post.js";
import css from "./Mypost.module.css";

const Mypost = props => {
  // let postData = [
  //   { id: 1, message: "Intresting story of my life", likesCount: 15 },
  //   {
  //     id: 2,
  //     message: "This is my photo from zkazachnoe Bali",
  //     likesCount: 456
  //   },
  //   { id: 3, message: "Coronavirus is coming!", likesCount: 1478 }
  // ];
  // удалить
  // const Row = () => {
  //   let x;
  //   console.log(postData[0].id);
  //   return (x = 1 + postData[1].id);
  // };
  // console.log(Row(postData));
  const addPost = () => {
    alert("it's working!");
  };
  return (
    <div className={css.postsBlock}>
      <div>
        <h3> My post</h3>
      </div>
      <div>
        <textarea></textarea>
      </div>
      <button onClick={addPost}>Add post</button>
      <div>New post</div>
      <div className={css.posts}>
        <Post postData={props.postData} />
        {/* <Post message={postData[0].message} like={postData[0].likesCount} />
        <Post message={postData[1].message} like={postData[1].likesCount} /> */}
      </div>
    </div>
  );
};

export default Mypost;
