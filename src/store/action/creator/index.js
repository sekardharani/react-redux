import { ADD_USERS, UPDATE_USERS, DELETE_USERS } from "../constants/index";

export function addUsers(payload) {
  return { type: ADD_USERS, payload };
}

export function updateUsers(payload) {
  return { type: UPDATE_USERS, payload };
}

export function deleteUsers(payload) {
  return { type: DELETE_USERS, payload };
}
export function fetchUsers(userId) {
  return function (dispatch, getState) {
    console.log(getState());
    fetch("https://jsonplaceholder.typicode.com/todos/" + userId)
      .then((response) => response.json())
      .then((json) => {
        dispatch(addUsers(json));
        console.log(getState());
      });
  };
}
