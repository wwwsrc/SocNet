import React from "react";
import css from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
/*
const DialogItem = props => (
  <li className={css.dialogs_item}>
    <NavLink to={`/dialogs/` + props.id} activeClassName={css.activeLink}>
      {props.name}
    </NavLink>
  </li>
); */
// const Message = props => <li className={css.messages_item}>{props.message}</li>;

const Dialogs = props => {
  // let userData = [
  //   { id: 1, name: "Andrey" },
  //   { id: 2, name: "Pikaso" },
  //   { id: 3, name: "Lilu" },
  //   { id: 4, name: "Corban" },
  //   { id: 5, name: "Dallas" }
  // ];
  // let messageData = [
  //   { id: 1, message: "Hello!" },
  //   { id: 2, message: "How are you?" },
  //   { id: 3, message: "Feelnigs good" },
  //   { id: 4, message: "Incredibele" },
  //   { id: 5, message: "Zebis" }
  // ];
  return (
    <div className={css.dialogs_container}>
      <div>
        <ul className={css.dialogs}>
          {props.userData.map(el => (
            <DialogItem id={el.id} name={el.name} key={el.id} />
          ))}
        </ul>
      </div>
      <div>
        <ul className={css.messages}>
          {props.messageData.map(elem => (
            <Message id={elem.id} message={elem.message} key={elem.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dialogs;
