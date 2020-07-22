import React from "react";
import UserTables from "./UserTables";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

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
    return <RowsTable userInfo={userInfo} key={userInfo.id} />;
  });

  return <TableBody>{bodyUserInfo}</TableBody>;
}

export default function TableConstruct(props) {
  return (
    <>
      <UserTables>
        <BodyForTable userList={props.users} />
      </UserTables>
      <p>{props.isFetching ? "Fetching Users ... " : ""}</p>
    </>
  );
}
