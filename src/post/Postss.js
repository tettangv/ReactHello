import React, { Component } from "react";
import axios from "axios";

class Postss extends Component {
  state = {
    data: []
  };

  // constructor() {
  //   super();
  // }

  async componentDidMount() {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({ data: result.data });
    console.log("Load Post Data");
  }

  render() {
    console.log("render Post");
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>UserId</td>
              <td>Id</td>
              <td>Title</td>
              <td>Body</td>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(userss => (
              <tr>
                <td>{userss.userId}</td>
                <td>{userss.id}</td>
                <td>{userss.title}</td>
                <td>{userss.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Postss;
