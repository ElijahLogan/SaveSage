import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Health from './Health';
import Landing from './Landing';
import Nutrition from './Nutrition';

import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap';



//link will replace href

const NavBar = () => {
  const [color, setColor] = useState(true)



  const toggleHover = () => setColor(!color)

  let linkStyle;
  if (color) {
    linkStyle = { backgroundColor: 'hsl(147, 64%, 61%)' }
  } else {
    linkStyle = { backgroundColor: 'white' }
  }
  return (
    <Navbar style={linkStyle}
      onMouseEnter={toggleHover} onMouseLeave={toggleHover} onScroll ={toggleHover}
      expand="lg">
      <Navbar.Brand href="#home"><Link to='/'> Save Sage </Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link> <Link to='/'> Home </Link></Nav.Link>
          <Nav.Link> <Link to='/recipe-search'> Company Search </Link> </Nav.Link>
          <Nav.Link> <Link to='/major-indexs'> Major Indexs </Link> </Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item> <Link to='questions'> Nutrition Questions </Link> </NavDropdown.Item>
          </NavDropdown>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar