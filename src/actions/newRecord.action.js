/** Action Type */
import { ADD_USER, CLEAN_ADD_MESSAGE } from "../actionTypes/actionTypes";

/** Dependencies */
import apiWS from "../api/ApiWS";

/**Action Creator */
const addUser = (user) => {
  return async (dispatch) => {
    let response = await apiWS.storeData("/new_record", user);
    dispatch({
      type: ADD_USER,
      user: response.data,
      add_user_message: response.message,
    });
  };
};

const cleanResponseMessage = () => {
  return {
    type: CLEAN_ADD_MESSAGE,
    add_user_message: { type: "default", messageText: "" }
  };
};
export { addUser, cleanResponseMessage };
