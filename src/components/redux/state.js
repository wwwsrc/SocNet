import profileReducer from "./profile_reducer";
import messagesReducer from "./messages_reducer";
import sidebarReducer from "./sidebar_reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Intresting story of my life", likesCount: 15 },
        {
          id: 2,
          message: "This is my photo from zkazachnoe Bali",
          likesCount: 456
        },
        { id: 3, message: "Coronavirus is coming!", likesCount: 1478 }
      ],
      newPostText: "type post here..."
    },
    messagesPage: {
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
    },
    sidebarUser: [
      { id: 1, name: "Andrew" },
      { id: 2, name: "Sasha" },
      { id: 3, name: "Laura" }
    ]
  },
  _callSubscriber() {
    return console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // addPost() {
  //   let newPost = {
  //     id: 55,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 12
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {
    // debugger;
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(
      this._state.messagesPage,
      action
    );
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

    // if (action.type === "ADD-POST") {
    //   let newPost = {
    //     id: 55,
    //     message: this._state.profilePage.newPostText,
    //     likesCount: 12
    //   };
    //   this._state.profilePage.posts.push(newPost);
    //   this._state.profilePage.newPostText = "";
    //   this._callSubscriber(this._state);
    // } else if (action.type === "UPDATE-POST-TEXT") {
    //   this._state.profilePage.newPostText = action.payload;
    //   this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //   this._state.messagesPage.newMessageBody = action.payload;
    //   this._callSubscriber(this._state);
    // } else if (action.type === SEND_MESSAGE) {
    //   let body = this._state.messagesPage.newMessageBody;
    //   this._state.messagesPage.newMessageBody = "";
    //   this._state.messagesPage.messages.push({
    //     id: 6,
    //     message: body
    //   });
    //   this._callSubscriber(this._state);
    // }
  }
};

export default store;
// window.state = state;
//  'updatePostTextActionCreator'

//updateNewMessageBodyCreator
// const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
// UPDATE_NEW_MESSAGE_BODY;
