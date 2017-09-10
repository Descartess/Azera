import { Map } from "immutable";
import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT
} from "../constants";

const INITIAL_STATE = Map({
  loading: false,
  token: null,
  authenticated: false,
  currentUser: "",
  error: null
});

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return (
          state.merge(Map({
            loading: false,
            authenticated: true,
            token: action.user.uid,
            currentUser: action.user.displayName
          }))
      );
    case LOGIN_FAILED:
      return (
          state.merge(Map({
            loading: false,
            authenticated: false,
            error: action.error
          }))
      );
    case LOGOUT:
      return (
          state.merge(Map({
            loading: false,
            authenticated: false,
            error: null,
            token: null,
            currentUser: ""
          }))
      );
    default:
      return state;
  }
};

