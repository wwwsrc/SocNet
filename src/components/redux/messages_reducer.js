const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";
let initialState = {
  dialogs: [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Pikaso" },
    { id: 3, name: "Lilu" },
    { id: 4, name: "Corban" },
    { id: 5, name: "Dallas" }
  ],
  messages: [
    { id: 1, message: "Hello!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Feelnigs good" },
    { id: 4, message: "Incredibele" },
    { id: 5, message: "Zebis" }
  ],
  newMessageBody: "a"
};
const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.payload;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({
        id: 6,
        message: body
      });
      return state;
    default:
      return state;
  }
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = payload => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  payload: payload
});
export default messagesReducer;
