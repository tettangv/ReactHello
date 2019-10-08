import React, { Component } from "react";
//import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import Users from "./user/Users";
//import { thisTypeAnnotation } from "@babel/types";
import Names from "./name/Names";
import Postss from "./post/Postss";
import { Route, Link } from "react-router-dom";
import Chatroom from "./chat/Chatroom";
import ChatroomCount from "./chat/ChatroomCount";
import ChatForm from "./chat/ChatForm";

class App extends Component {
  state = {
    name: "Tet Tangvongsasiriwat"
  };

  onNameChanges = name => {
    this.setState({ name: name });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <div>Hello {name}</div>
        <div>
          <Names name={name} onNameChanges={this.onNameChanges} />
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/users">Users...12</Link>
        </div>
        <div>
          <Link to="/postss">Posts..23</Link>
        </div>
        <div>
          <Link to="/countcount">countroom</Link>
        </div>
        <div>
          <Link to="/chatroom">chatroom</Link>
        </div>
        <div>
          <Link to="/chat">chat</Link>
        </div>
        <Route path="/users" component={Users}></Route>
        <Route path="/postss" component={Postss}></Route>
        <Route path="/chatroom" component={Chatroom}></Route>
        <Route path="/countcount" component={ChatroomCount}></Route>
        <Route path="/chat" component={ChatForm}></Route>
      </div>
    );
  }
}

export default App;
