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
    console.log("render User");
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>email</td>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(userss => (
              <tr>
                <td>{userss.id}</td>
                <td>{userss.name}</td>
                <td>{userss.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
