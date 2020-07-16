import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// play with material UI styles later
const useStyles = makeStyles({
  head: {
    backgroundColor: "gray",
    fontWeight: 900,
  },
  table: {
    minWidth: 650,
  },
});

function TableHeaders() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>User ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Username</TableCell>
      </TableRow>
    </TableHead>
  );
}

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

export default function UserTables({ userList }) {
  const classes = useStyles;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHeaders />

        {/* pass Props into the body at this below, pass props 2 times */}
        <BodyForTable userList={userList} />
      </Table>
    </TableContainer>
  );
}
