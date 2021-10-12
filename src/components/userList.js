import React, { useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/action/creator/index";
function UserList(props) {
  //   const userState = useSelector((state) => state);
  //   console.log(userState);
  const userInfo = useDispatch();

  const userStateNew = useSelector((state) => state);
  console.log(userStateNew);

  const addUsers = () => {
    userInfo(fetchUsers(1));
  };

  return (
    <div className="App">
      <h1>User List</h1>

      <button onClick={addUsers}>addUsers</button>
    </div>
  );
}

export default UserList;
