import React from "react";
import css from "./users.module.css";
import axios from "axios";
import userDefaultPhoto from "../../assets/images/avatar-default.png";

let Users = props => {
  //   let users = [];
  console.log(props.users.length);
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(result => {
        console.log(result.data.items);
        props.setUsers(result.data.items);
      });
  }
  // props.setUsers([
  //   {
  //     id: 1,
  //     photoUrl:
  //       "https://www.meme-arsenal.com/memes/d2ee67ecacbc1954c4add8f335a1699d.jpg",
  //     followed: false,
  //     fullName: "Li Kahn",
  //     status: "student",
  //     location: { city: "Minsk", country: "Belarus" }
  //   },
  //   {
  //     id: 2,
  //     photoUrl:
  //       "https://www.meme-arsenal.com/memes/d2ee67ecacbc1954c4add8f335a1699d.jpg",
  //     followed: true,
  //     fullName: "Jaden",
  //     status: "worker",
  //     location: { city: "London", country: "England" }
  //   },
  //   {
  //     id: 3,
  //     photoUrl:
  //       "https://www.meme-arsenal.com/memes/d2ee67ecacbc1954c4add8f335a1699d.jpg",
  //     followed: false,
  //     fullName: "Mike",
  //     status: "Director",
  //     location: { city: "Kiev", country: "Ukraine" }
  //   }
  // ]);

  return (
    <div>
      {props.users.map(users => (
        <div key={users.id}>
          <span>
            <div>
              {console.log(users.photoUrl)}
              <img
                src={
                  users.photos.small != null
                    ? users.photos.small
                    : userDefaultPhoto
                }
                className={css.userPhoto}
              />
            </div>
            <div>
              {users.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(users.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(users.id);
                  }}
                >
                  unFollow
                </button>
              )}
            </div>
          </span>
          <span>
            <div> {users.name}</div>
            <div>{users.status}</div>
          </span>
          <span>
            <div>{"users.location.country"}</div>
            <div>{"users.location.city"}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
