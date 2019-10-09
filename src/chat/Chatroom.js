import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import { Redirect } from "react-router-dom";
import { Socket } from "net";
import { thisExpression } from "@babel/types";
// import Message from "./Message";

class Chatroom extends Component {
  state = {
    socket: null,
    messages: [
      { text: "Hi", member: "FutureSkill" },
      { text: "Hi", member: "Mark" },
      { text: "Good Bye", member: "FutureSkill" },
      { text: "Bye", member: "Mark" }
    ]
  };

  // constructor() {
  //   super();
  //   const socket = socketIOClient("http://localhost:8080");
  //   this.setState({ socket: socket });
  // }

  componentDidMount() {
    if (this.state.socket == null) {
      const socket = socketIOClient("http://localhost:8080");
      socket.on("message", message => {
        this.addMessage(message);
      });
      this.setState({ socket: socket });
    }
  }

  onMessageSend = message => {
    this.addMessage(message);
    // const { socket } = this.state;
    this.state.socket.emit("emit", { ...message });
  };

  addMessage = message => {
    this.setState({ messages: [...this.state.messages, { ...message }] });
  };

  render() {
    if (this.props.location.name == null) {
      return <Redirect to="/chat"></Redirect>;
    } else {
      const { name } = this.props.location;
      return (
        <div>
          <MessageList messages={this.state.messages} />
          <MessageForm
            onMessageSend={this.onMessageSend}
            currentMember={name}
          />
        </div>
      );
    }
  }
}

export default Chatroom;
