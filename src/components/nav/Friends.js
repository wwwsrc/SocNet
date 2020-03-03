import React from "react";
import css from "./Friends.module.css";

const Friends = props => {
  // console.log(props.userName[0].name);

  return (
    <div>
      <ul className={css.itemList}>
        {props.userName.map(elem => (
          <li key={elem.id} className={css.item}>
            {elem.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
