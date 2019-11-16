import React from 'react'
import {Link} from 'react-router-dom';

import Health from './Health';
import Landing from './Landing';
import Nutrition from './Nutrition';

import {Navbar, Nav, NavDropdown, FormControl, Form, Button} from 'react-bootstrap';



//link will replace href

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Eat Well</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link> <Link to ='/'> Home </Link></Nav.Link>
      <Nav.Link> <Link to = '/recipe-search'> RecipeSearch </Link> </Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item> <Link to='questions'> Nutrition Questions </Link> </NavDropdown.Item>
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavBar