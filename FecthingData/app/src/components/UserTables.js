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

export default function UserTables(props) {
  const classes = useStyles;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHeaders />
        {props.children}
      </Table>
    </TableContainer>
  );
}
