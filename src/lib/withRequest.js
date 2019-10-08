import React, { Component } from "react";
import axios from "axios";

export default url => WrappedComponents =>
  class extends Component {
    state = {
      data: []
    };
    async componentDidMount() {
      const result = await axios.get(url);
      this.setState({ data: result.data });
      // console.log("Load User Data");
    }

    render() {
      return <WrappedComponents {...this.state} {...this.props} />;
    }
  };
