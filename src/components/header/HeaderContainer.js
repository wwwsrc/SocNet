import React from "react";
import { Component } from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../redux/auth_reducer";

class HeaderContainer extends Component {
  state = {};
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
      .then(result => {
        if (result.data.resultCode === 0) {
          let { id, login, email } = result.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  };
};
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
