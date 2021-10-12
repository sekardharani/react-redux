import { ADD_USERS } from "../action/constants";
export const initialState = {
  users: [],
};
function userReducer(state = initialState, action) {
  if (action.type === ADD_USERS) {
    return Object.assign({}, state, {
      users: state.users.concat(action.payload),
    });
  }
  return state;
}

export default userReducer;
