import React from "react";
import css from "./users.module.css";
import userDefaultPhoto from "../../assets/images/avatar-default.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";

const Users = (props) => {
  console.log(props.users);

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p ? css.selectedPage : null}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {/* <button onClick={this.getUsers}>Get usrs</button> */}
      {props.users.map((users) => (
        <div key={users.id}>
          <span>
            <div>
              {console.log(users.photoUrl)}
              <NavLink to={"/profile/" + users.id}>
                <img
                  src={
                    users.photos.small != null
                      ? users.photos.small
                      : userDefaultPhoto
                  }
                  className={css.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {users.followed ? (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === users.id
                  )}
                  onClick={() => {
                    props.unfollow(users.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === users.id
                  )}
                  onClick={() => {
                    props.follow(users.id);
                  }}
                >
                  Follow
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
