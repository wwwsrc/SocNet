const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

export const profileReducer = (state, action) => {
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
