import React, { Component } from "react";
import axios from "axios";

class Names extends Component {
  state = {
    data: []
  };

  constructor() {
    super();
    this.state.data = null;
  }

  async componentDidMount() {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ data: result.data });
    console.log("Load User Data");
  }

  onChange = event => {
    //console.log(event.target.value);
    this.props.onNameChanges(event.target.value);
  };

  render() {
    console.log("render Name");
    return (
      <div>
        <div>Hello permanent {this.props.name}</div>
        <div>
          <input type="text" onChange={this.onChange}></input>
        </div>
      </div>
    );
  }
}

export default Names;
