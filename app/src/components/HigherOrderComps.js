import React, { Component } from "react";
import UserTables from "./UserTables";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

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

class HigherOrderComps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      users: [],
    };
  }
  render() {
    return (
      <>
        <UserTables>
          <BodyForTable userList={this.state.users} />
        </UserTables>
        <p>{this.state.isFetching ? "Fetching Users ... " : ""}</p>
      </>
    );
  }

  // fire off the call to get the data after the component has been mounted
  componentDidMount() {
    this.fetchUsers();
    this.timer = setInterval(() => this.fetchUsers(), 5000);
  }

  // remove timer when component goes away
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  fetchUserWithFetchAPI = () => {
    this.setState({ ...this.state, isFetching: true });
    fetch(USER_SERVICE_URL)
      .then((response) => response.json())
      .then((results) => {
        this.setState({ users: results, isFetching: false });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  };

  // assign async function to variable to be called
  fetchUsers = this.fetchUserWithFetchAPI;
}
export default HigherOrderComps;
