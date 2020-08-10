import React from "react";
import css from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import { Redirect } from "react-router-dom";
// import {
//   sendMessageCreator,
//   updateNewMessageBodyCreator
// } from "../redux/messages_reducer";
/*
const DialogItem = props => (
  <li className={css.dialogs_item}>
    <NavLink to={`/dialogs/` + props.id} activeClassName={css.activeLink}>
      {props.name}
    </NavLink>
  </li>
); */
// const Message = props => <li className={css.messages_item}>{props.message}</li>;

const Dialogs = (props) => {
  let state = props.messagesPage;
  // console.log("a12", props);
  let newMessageBody = props.newMessageBody;
  // let newMessage = React.createRef();

  let onSendMessageClick = () => {
    props.sendMessage();
    // props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
    // props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={css.dialogs_container}>
      <div>
        <ul className={css.dialogs}>
          {state.dialogs.map((el) => (
            <DialogItem id={el.id} name={el.name} key={el.id} />
          ))}
        </ul>
      </div>
      <div>
        <ul className={css.messages}>
          {state.messages.map((elem) => (
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
