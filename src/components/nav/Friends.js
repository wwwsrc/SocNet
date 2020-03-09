import React from "react";
import css from "./Friends.module.css";

const Friends = props => {
  console.log(props);

  return (
    <div>
      <ul className={css.itemList}>
        {props.userName.sidebarUser.map(elem => (
          <li key={elem.id} className={css.item}>
            {elem.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
