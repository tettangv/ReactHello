import React, { Component } from "react";
//import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import Users from "./user/Users";
//import { thisTypeAnnotation } from "@babel/types";
// import Names from "./name/Names";
import Postss from "./post/Postss";
// import { Route, Link } from "react-router-dom";
import Chatroom from "./chat/Chatroom";
import ChatroomCount from "./chat/ChatroomCount";
import ChatForm from "./chat/ChatForm";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
// import styled from "styled-components";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class App extends Component {
  state = {
    name: "Tet Tangvongsasiriwat"
  };

  onNameChanges = name => {
    this.setState({ name: name });
  };

  render() {
    // const { name } = this.state;
    return (
      <div>
        <Router>
          {/* <Wrapper> */}
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Home</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/users">User</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/postss">Post</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/chat">Chatroom</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Chat Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag={Link} to="/countcount">
                      countroom
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/chatroom">
                      Chatroom-1
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          {/* </Wrapper> */}
        </Router>

        {/* <div>Hello {name}</div>
        <div>
          <Names name={name} onNameChanges={this.onNameChanges} />
        </div> */}
        {/* <div>
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
        </div> */}
        {/* <Redirect exact from="/" to="/users" /> */}
        <Route  path="/home" component={Home}></Route>
        <Route  path="/users" component={Users}></Route>
        <Route path="/postss" component={Postss}></Route>
        <Route path="/chatroom" component={Chatroom}></Route>
        <Route path="/countcount" component={ChatroomCount}></Route>
        <Route exact path="/chat" component={ChatForm}></Route>
      </div>
    );
  }
}

export default App;
