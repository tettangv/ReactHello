import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import { Redirect } from "react-router-dom";
// import Message from "./Message";

class Chatroom extends Component {
  state = {
    messages: [
      { text: "Hi", member: "FutureSkill" },
      { text: "Hi", member: "Mark" },
      { text: "Good Bye", member: "FutureSkill" },
      { text: "Bye", member: "Mark" }
    ]
  };

  onMessageSend = message => {
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
