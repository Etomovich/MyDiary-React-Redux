import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component{
  render(){
    return (
      <Navbar bg="dark" variant="dark" className="header-format">
        <Navbar.Brand href="/">CONTACTS</Navbar.Brand>
        <Nav >
          <Nav.Link href="/create">Create</Nav.Link>
          <Nav.Link href="/edit">Edit</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
