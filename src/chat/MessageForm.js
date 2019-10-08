import React, { Component } from "react";

class MessageForm extends Component {
  state = {
    text: ".0...."
  };
  onSubmit = e => {
    e.preventDefault();
    //send Message;
    this.props.onMessageSend({
      text: this.state.text,
      member: this.props.currentMember
    });
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.text} onChange={this.onChange} />
        <button>send</button>
      </form>
    );
  }
}

export default MessageForm;
