import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class ChatForm extends Component {
  state = {
    name: ""
  };
  onChange = e => {
    this.setState({ name: e.target.value });
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        <input type="text" value={name} onChange={this.onChange} />
        <Link to={{ pathname: "/chatroom", name: name }}>Join</Link>
        {/* <Route path="/chatroom" component={ChatForm}></Route> */}
      </div>
    );
  }
}

export default ChatForm;
