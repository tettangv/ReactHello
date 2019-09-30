import React, { Component } from "react";
//import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import Users from "./user/Users";
//import { thisTypeAnnotation } from "@babel/types";
import Names from "./name/Names";
import Postss from "./post/Postss";
import { Route, Link } from "react-router-dom";

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
          <Link to="/users">Users</Link>
        </div>
        <div>
          <Link to="/postss">Posts</Link>
        </div>
        <Route path="/users" component={Users}></Route>
        <Route path="/postss" component={Postss}></Route>
      </div>
    );
  }
}

export default App;
