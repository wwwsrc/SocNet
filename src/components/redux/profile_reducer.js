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
    { id: 3, message: "Coronavirus is coming!", likesCount: 666 }
  ],
  newPostText: "type post here..."
};
const profileReducer = (state = initialState, action) => {
  console.log("rrr", state);
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 12
      };
      let nextState = {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };
      return nextState;
    }
    case UPDATE_POST_TEXT:
      return { ...state, newPostText: action.payload };

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
