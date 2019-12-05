
import React from 'react'
import { Link } from 'react-router-dom';

import Health from './Health';
import Landing from './Landing';
import Nutrition from './Nutrition';

import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap';



//link will replace href

const Footer = () => {
  return (
    <footer id="sticky-footer" class="py-4 text-white-50" style={{ backgroundColor: 'hsl(210, 91%, 22%)' }}>
      
        <p>Copyright &copy; Elijah Logan</p>

      
    </footer>
  )
}

export default Footer;



