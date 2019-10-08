import { Component } from "react";
import Axios from "axios";

class Request extends Component {
  state = {
    data: []
  };
  async componentDidMount() {
    const result = await Axios.get(this.props.url);
    this.setState({ data: result.data });
  }

  render() {
    return this.props.children(this.state.data);
  }
}

export default Request;
