import React from "react";
import css from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends";
const Nav = props => (
  <nav className={css.nav}>
    <ul className={css.navMenu}>
      <li className={css.item}>
        <NavLink to="/profile" activeClassName={css.activeLink}>
          Profile
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/dialogs" activeClassName={css.activeLink}>
          Messages
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/users" activeClassName={css.activeLink}>
          USers
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/news" activeClassName={css.activeLink}>
          News
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/music" activeClassName={css.activeLink}>
          Music
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/settings" activeClassName={css.activeLink}>
          Settings
        </NavLink>
      </li>
    </ul>
    <div className={`${css.item} ${css.item__friends}`}>
      {/* {css.item + "" + css.item__friends} */}
      {/* [css.item, css.item__friends].join(" ") */}
      <NavLink to="/friends" activeClassName={css.activeLink}>
        FRIENDS
      </NavLink>
      {/* <Friends userName={props.sidebarUser} /> */}
      {console.log("here", props)}
    </div>
  </nav>
);

export default Nav;
