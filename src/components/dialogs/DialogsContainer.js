import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator
} from "../redux/messages_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
/*
const DialogItem = props => (
  <li className={css.dialogs_item}>
    <NavLink to={`/dialogs/` + props.id} activeClassName={css.activeLink}>
      {props.name}
    </NavLink>
  </li>
); */
// const Message = props => <li className={css.messages_item}>{props.message}</li>;

// const DialogsContainer = props => {
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         let state = store.getState().messagesPage;
//         console.log("a122", state);
//         // let newMessageBody = props.newMessageBody;
//         // let newMessage = React.createRef();

//         let onSendMessageClick = () => {
//           store.dispatch(sendMessageCreator());
//         };

//         let onNewMessageChange = body => {
//           store.dispatch(updateNewMessageBodyCreator(body));
//         };

//         return (
//           <Dialogs
//             updateNewMessageBody={onNewMessageChange}
//             sendMessage={onSendMessageClick}
//             messagesPage={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
// export default DialogsContainer;

let mapStateToProps = state => {
  return {
    messagesPage: state.messagesPage
  };
};
let mapDispatchToProps = dispatch => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageCreator());
    },
    sendMessage: body => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
