import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";
                                                                                          
export default createStore(
  reducer,
  {
    users: [],
    load_user_message: { type: "default", messageText: "" },
    add_user_message: { type: "default", messageText: "" },
    edit_user_message: {
      type: "info",
      messageText: "Please click on the information for edit!",
    },
  },
  applyMiddleware(thunk)
);
