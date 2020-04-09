import React from "react";
import css from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => (
  <header className={css.header}>
    <img
      src="http://i.piccy.info/i9/4ca6a272c486d9259198cb0761044dd2/1582573382/195681/1364308/logo.png"
      alt="logocompany"
      width="140px"
    />
    <div className={css.loginBlock}>
      {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
    </div>
  </header>
);

export default Header;
