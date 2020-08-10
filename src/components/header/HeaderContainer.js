import React from "react";
import { Component } from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { getAuthUserData } from "../redux/auth_reducer";
// import { authAPI } from "../../api/api";

class HeaderContainer extends Component {
  state = {};
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
