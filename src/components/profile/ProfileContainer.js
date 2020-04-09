import React, { Component } from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../redux/profile_reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(result => {
        this.props.setUserProfile(result.data);
      });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile
  };
};

// let WithUrlDataContainerComponent = ;

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileContainer)
);
