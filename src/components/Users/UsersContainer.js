import React, { Component } from "react";
import axios from "axios";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingInProgress
} from "../redux/users_reducer";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }
  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      console.log(data.items);
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };
  // getUsers = () => {
  //   if (this.props.users.length === 0) {

  //   }
  // };
  render() {
    {
      console.log("propshere :", this.props);
    }
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};

// Dispatch before refactoring
// const mapDispatchToProps = dispatch => {
//   return {
//     follow: userId => {
//       dispatch(followActionCreator(userId));
//     },
//     unfollow: userId => {
//       dispatch(unfollowActionCreator(userId));
//     },
//     setUsers: users => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setCurrentPage: pageNumber => {
//       dispatch(setCurrentPageActionCreator(pageNumber));
//     },
//     setTotalUsersCount: totalCount => {
//       dispatch(setUsersTotalCountActionCreator(totalCount));
//     },
//     toggleIsFetching: isFetching => {
//       dispatch(toggleIsFetchingActionCreator(isFetching));
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingInProgress
})(UsersContainer);
