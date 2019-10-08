import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class ChatroomCount extends Component {
  state = {
    socket: null,
    count: 0
  };

  componentDidMount() {
    const socket = socketIOClient("localhost:8080");
    this.setState({ socket: socket });
    // socket.emit("emit", { data: "test" });
    socket.on("count", data => this.handleCount(data));
  }

  handleCount = data => {
    this.setState({ count: data.count });
  };

  onClick = () => {
    let { socket, count } = this.state;
    count += 1;
    this.setState({ count: count });
    socket.emit("emit", { count: count });
  };

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.onClick}>Click Me.</button>
      </div>
    );
  }
}

export default ChatroomCount;
