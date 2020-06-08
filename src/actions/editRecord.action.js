/** Action Types */
import {
  UPDATE_USER,
  REMOVE_USER,
  CLEAN_RESPONSE_MESSAGE
} from "../actionTypes/actionTypes";

/** Dependecies */
import apiWS from "../api/ApiWS";

/** Action Creators  */
const updateUser = (user) => {
  return async (dispatch) => {
    let response = await apiWS.updateDataById("/update_record", user);
    dispatch({
      type: UPDATE_USER,
      user: user,
      edit_user_message: response.message,
    });
  };
};

const removeUser = (userId) => {
  return async (dispatch) => {
    let response = await apiWS.deleteDataById("/delete_record", userId);
    dispatch({
      type: REMOVE_USER,
      user: response.data,
      edit_user_message: response.message,
    });
  };
};

const cleanResponseMessage = (
  message = { type: "info", messageText: "Please click on the information for edit!" }
) => {
  return {
    type: CLEAN_RESPONSE_MESSAGE,
    edit_user_message: message,
  }
};
export { updateUser, removeUser, cleanResponseMessage };
