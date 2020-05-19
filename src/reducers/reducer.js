/** Action Types */
import {
  ADD_USER,
  LOAD_USERS,
  REMOVE_USER,
  UPDATE_USER,
  CLEAR_RESPONSE_MESSAGE,
  CLEAR_ADD_MESSAGE
} from "../actionTypes/actionTypes";

/** Reducer */
const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: action.users,
        load_user_message: action.load_user_message,
      };
    case ADD_USER:
      return {
        ...state,
        users: state.users
          .concat([action.user])
          .filter((user) => Object.entries(user).length !== 0),
        add_user_message: action.add_user_message,
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.user._id),
        edit_user_message: action.edit_user_message,
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          return user._id === action.user._id ? action.user : user;
        }),
        edit_user_message: action.edit_user_message,
      };
    case CLEAR_RESPONSE_MESSAGE:
      return {
        ...state,
        edit_user_message: action.edit_user_message,
      };
    case CLEAR_ADD_MESSAGE:
      return{
        ...state,
        add_user_message: action.add_user_message
      }
    default:
      return state;
  }
};
export default reducer;
