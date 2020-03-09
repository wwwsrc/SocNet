import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator
} from "../redux/messages_reducer";
import Dialogs from "./Dialogs";
/*
const DialogItem = props => (
  <li className={css.dialogs_item}>
    <NavLink to={`/dialogs/` + props.id} activeClassName={css.activeLink}>
      {props.name}
    </NavLink>
  </li>
); */
// const Message = props => <li className={css.messages_item}>{props.message}</li>;

const DialogsContainer = props => {
  let state = props.store.getState().messagesPage;
  // console.log("a12", state);
  // let newMessageBody = props.newMessageBody;
  // let newMessage = React.createRef();

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = body => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      messagesPage={state}
    />
  );
};

export default DialogsContainer;
