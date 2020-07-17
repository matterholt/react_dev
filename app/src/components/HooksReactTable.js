import React, { useState, useEffect } from "react";
import UserTables from "./UserTables";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";

const USER_SERVICE_URL = "https://jsonplaceholder.typicode.com/users";

function RowsTable({ userInfo }) {
  return (
    <TableRow>
      <TableCell>{userInfo.id}</TableCell>
      <TableCell>{userInfo.name}</TableCell>
      <TableCell>{userInfo.username}</TableCell>
    </TableRow>
  );
}

function BodyForTable({ userList }) {
  const bodyUserInfo = userList.map((userInfo) => {
    return <RowsTable userInfo={userInfo} />;
  });

  return <TableBody>{bodyUserInfo}</TableBody>;
}

export default function HooksReactTable() {
  const [usersList, setUsersList] = useState({ users: [], isFetching: false });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setUsersList({ users: usersList.users, isFetching: true });
        const response = await axios.get(USER_SERVICE_URL);
        setUsersList({ users: response.data, isFetching: false });
      } catch (e) {
        console.log(e);
        setUsersList({ user: usersList.users, isFetching: false });
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <UserTables>
        <BodyForTable userList={usersList.users} />
      </UserTables>
      <p>{usersList.isFetching ? "Fetching Users ... " : ""}</p>
    </>
  );
}
