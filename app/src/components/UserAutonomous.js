import React, { Component } from "react";
import UserTables from "./UserTables";

const USER_SERVICE_URL = "https://jsonplaceholder.typicode.com/users";

class UserTableAutonomous extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      users: [{ id: "test", name: "jane", username: "doeJ" }],
    };
  }
  render() {
    return (
      <>
        <UserTables userList={this.state.users} />
      </>
    );
  }
}

// async function fetchUsersAsync() {
//     try {
//         this.setState({...this.state, isFetching: true});
//         const response = await axios.get(USER_SERVICE_URL);
//         this.setState({users: response.data, isFetching: false});
//     } catch (e) {
//         console.log(e);
//         this.setState({...this.state, isFetching: false});
//     }
// };

// fetchUsers = this.fetchUsersAsync;

export default UserTableAutonomous;
