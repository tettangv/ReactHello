import React, { Component } from "react";
import "./App.css";
import Users from "./user/Users";
import Names from "./name/Names";
import Postss from "./post/Postss";
import { Route, Link } from "react-router-dom";
import Request from "./lib/Request";
class App extends Component {
  state = {
    name: "Tet Tangvongsasiriwat"
  };

  onNameChange = name => {
    this.setState({ name: name });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <div>Hello {name}</div>
        <div>
          <Names name={name} onNameChange={this.onNameChange} />
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/users">Users..</Link>
        </div>
        <div>
          <Link to="/postss">Posts...</Link>
        </div>
        <Route
          path="/users"
          component={() => (
            <Request url="https://jsonplaceholder.typicode.com/users">
              {data => <Users data={data} />}
            </Request>
          )}
        ></Route>
        <Route
          path="/postss"
          component={() => (
            <Request url="https://jsonplaceholder.typicode.com/posts">
              {data => <Postss data={data} />}
            </Request>
          )}
        ></Route>
      </div>
    );
  }
}

export default App;
