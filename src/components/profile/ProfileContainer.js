import React, { Component } from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../redux/profile_reducer";
import { withRouter, Redirect } from "react-router-dom";
import { usersAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 6041;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}
//HOC
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

// // let WithUrlDataContainerComponent = ;

// export default connect(mapStateToProps, { getUserProfile })(
//   withRouter(AuthRedirectComponent)
// );

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);
