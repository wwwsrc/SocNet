import React from "react";
import css from "./users.module.css";
import userDefaultPhoto from "../../assets/images/avatar-default.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map(p => {
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
      {props.users.map(users => (
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
                    id => id === users.id
                  )}
                  onClick={() => {
                    // debugger;
                    props.toggleFollowingInProgress(true, users.id);
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0//follow/${users.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "2b9c8bf9-f831-4fd3-8f36-c126acd84ce1"
                          }
                        }
                      )
                      .then(result => {
                        if (result.data.resultCode == 0) {
                          props.unfollow(users.id);
                        }
                        props.toggleFollowingInProgress(false, users.id);
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    id => id === users.id
                  )}
                  onClick={() => {
                    props.toggleFollowingInProgress(true, users.id);
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0//follow/${users.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "2b9c8bf9-f831-4fd3-8f36-c126acd84ce1"
                          }
                        }
                      )
                      .then(result => {
                        if (result.data.resultCode == 0) {
                          props.follow(users.id);
                        }
                        props.toggleFollowingInProgress(false, users.id);
                      });
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
