import { usersAPI } from "../../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Intresting story of my life", likesCount: 15 },
    {
      id: 2,
      message: "This is my photo from zkazachnoe Bali",
      likesCount: 456,
    },
    { id: 3, message: "Coronavirus is coming!", likesCount: 666 },
  ],
  newPostText: "type post here...",
  profile: null,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 12,
      };
      let nextState = {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
      return nextState;
    }
    case UPDATE_POST_TEXT:
      return { ...state, newPostText: action.payload };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updatePostTextActionCreator = (payload) => ({
  type: UPDATE_POST_TEXT,
  payload: payload,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile: profile,
});
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((result) => {
    dispatch(setUserProfile(result.data));
  });
};
export default profileReducer;
