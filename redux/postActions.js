import postActionTypes from "./postActionTypes";

export const AddNewPost = (post) => ({
  type: postActionTypes.ADD_NEW_POST,
  payload: post,
});
