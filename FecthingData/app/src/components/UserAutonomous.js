import React, { Component } from "react";
import UserTables from "./UserTables";
import axios from "axios";

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

class BodyForTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      users: [],
    };
  }

  render() {
    return (
      <TableBody>
        {this.state.users.map((userInfo) => {
          return <RowsTable userInfo={userInfo} key={userInfo.id} />;
        })}
      </TableBody>
    );
  }

  // fire off the call to get the data after the component has been mounted
  componentDidMount() {
    this.fetchUsers();
    // this.timer = setInterval(() => this.fetchUsers(), 5000);
  }

  // remove timer when component goes away
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  async fetchUserAsync() {
    try {
      /* update the state of isFetching, 
      but since the state is not all new will need to use rest parameter
      of the user state
      */
      this.setState({ ...this.state, isFetching: true });
      // obtain the data
      const response = await axios.get(USER_SERVICE_URL);
      // update the user state and remove the fetching
      this.setState({ users: response.data, isFetching: false });
    } catch (e) {
      // catch any error and console.log them
      // not the best way but for demo is OK
      console.log(e);
      this.setState({ ...this.state, isFetching: true });
    }
  }
  // assign async function to variable to be called
  fetchUsers = this.fetchUserAsync;
}

class UserTableAutonomous extends Component {
  /*
data is fetched in the table body apposed to the fetching the data in the parent component
It is bit of a hybrid meaning that  the way I made component still has Higher order components.
Parent has no idea of what the data in the table body is  
*/
  render() {
    return (
      <UserTables>
        <BodyForTable />
      </UserTables>
    );
  }
}
export default UserTableAutonomous;
