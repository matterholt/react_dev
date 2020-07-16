import React, { Component } from "react";
import UserTables from "./UserTables";
import axios from "axios";

const USER_SERVICE_URL = "https://jsonplaceholder.typicode.com/users";

class UserTableAutonomous extends Component {
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
        <UserTables userList={this.state.users} />
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
export default UserTableAutonomous;
