import React from "react";
import css from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => (
  <li className={css.dialogs_item}>
    <NavLink to={`/dialogs/` + props.id} activeClassName={css.activeLink}>
      {props.name}
    </NavLink>
  </li>
);

export default DialogItem;
