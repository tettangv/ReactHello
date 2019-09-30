import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  state = {
    data: []
  };

  // constructor() {
  //   super();
  // }

  async componentDidMount() {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ data: result.data });
    console.log("Load User Data");
  }

  onChange = event => {
    //console.log(event.target.value);
    this.props.onNameChange(event.target.value);
  };

  render() {
    console.log("render Name");
    return (
      <div>
        <input type="text" onChange={this.onChange}></input>
      </div>
    );
  }
}

export default Users;
