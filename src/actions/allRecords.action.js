/**
Dependencies
*/
import { LOAD_USERS } from "../actionTypes/actionTypes";
import apiWS from "../api/ApiWS";

/**
 Action creator
 */
const loadUsers = () => {
  return async (dispatch) => {
    let result = await apiWS.getData("/");
    dispatch({
      type: LOAD_USERS,
      users: result.data,
      load_user_message: result.message,
    });
  };
};
export default loadUsers;
