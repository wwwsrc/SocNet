import React from "react";
import css from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator
} from "../redux/messages_reducer";
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
  let state = props.store.getState().messagesPage;
  console.log("a12", state);
  let newMessageBody = props.newMessageBody;
  let newMessage = React.createRef();

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = event => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

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
      <div>
        <textarea
          value={newMessageBody}
          onChange={onNewMessageChange}
        ></textarea>
        <button onClick={onSendMessageClick}>Add post</button>
      </div>
    </div>
  );
};

export default Dialogs;
