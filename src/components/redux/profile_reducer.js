const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
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
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 55,
        message: state.newPostText,
        likesCount: 12
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.payload;
      return state;
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({
  type: ADD_POST
});
export const updatePostTextActionCreator = payload => ({
  type: UPDATE_POST_TEXT,
  payload: payload
});
export default profileReducer;
