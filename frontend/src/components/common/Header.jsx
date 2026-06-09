import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
        //  {/* header section created on 02/06/26 by Juby */}
    <header>
      <div className="container py-3">
        <Navbar expand="lg">      
          <Navbar.Brand href="#home" className='logo'>
            <span>Smart </span>  Constructions
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='Nav-link'>Home</Nav.Link>
              <Nav.Link href="#link" className='Nav-link'>About Us</Nav.Link>
              <Nav.Link href="#home" className='Nav-link'>Services</Nav.Link>
              <Nav.Link href="#link" className='Nav-link'>Projects</Nav.Link>
              <Nav.Link href="#home" className='Nav-link'>Blogs</Nav.Link>
              <Nav.Link href="#link" className='Nav-link'>Contact Us</Nav.Link>            
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>

    // {/* --------end header section -------- */}

  )
}

export default Header