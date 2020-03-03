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
      newPostText: "start text"
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
      ]
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
  addPost() {
    let newPost = {
      id: 55,
      message: this._state.profilePage.newPostText,
      likesCount: 12
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
};

export default store;
// window.state = state;
