import React, { Component } from "react";

import axios from "axios";

const USER_SERVICE_URL = "https://jsonplaceholder.typicode.com/users";

class RenderProp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      users: [],
    };
  }
  render = () => this.props.children(this.state);

  componentDidMount() {
    this.fetchUsers();
    this.timer = setInterval(() => this.fetchUsers(), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  fetchUserWithAxios = () => {
    this.setState({ ...this.state, isFetching: true });
    axios
      .get(USER_SERVICE_URL)
      .then((response) => {
        this.setState({ users: response.data, isFetching: false });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  };

  // assign async function to variable to be called
  fetchUsers = this.fetchUserWithAxios;
}
export default RenderProp;
