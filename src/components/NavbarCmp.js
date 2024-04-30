import React, { useState } from 'react'
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import './NavbarCmp.css'
import logo from '../images/logo.png'

function NavbarCmp() {

  // offcanvas togle function
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleOffcanvasToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };
  return (
    <>
    {/* navbar */}
    <Navbar collapseOnSelect className="navbar" sticky='top' expand="md">
      <Container>
        {/* navbar logo */}
        <Navbar.Brand href="/"><img className='nav-logo img-fluid' src={logo}></img></Navbar.Brand>
        {/* togle button */}
        <button class=" nav-button custom-toggler navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        aria-label="Toggle navigation" 
        onClick={handleOffcanvasToggle}>
        <span class="nav-toggle-icon"></span>
      </button>

    <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link eventKey={2} href="#service">SERVICE</Nav.Link>
            <Nav.Link eventKey={3} href="#about">ABOUT US</Nav.Link>
            <Nav.Link eventKey={4} href="#contact">CONTACT US</Nav.Link>
            <Nav.Link eventKey={5} href="#careers">CAREERS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* offcanvas */}
    <Offcanvas 
    collapseOnSelect className="offcanvas-full"
    show={showOffcanvas} 
    onHide={handleOffcanvasToggle} 
    placement="end">
        <Offcanvas.Header closeButton/>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link className='nav-link-black' href="#memes" onClick={handleOffcanvasToggle}>HOME</Nav.Link>
            <Nav.Link className='nav-link-black' eventKey={2} href="#section1"  onClick={handleOffcanvasToggle}>ABOUT US</Nav.Link>
            <Nav.Link className='nav-link-black' eventKey={3} href="#memes"  onClick={handleOffcanvasToggle}>ABOUT US</Nav.Link>
            <Nav.Link className='nav-link-black' eventKey={4} href="#memes"  onClick={handleOffcanvasToggle}>CONTACT US</Nav.Link>
            <Nav.Link className='nav-link-black' eventKey={5} href="#memes"  onClick={handleOffcanvasToggle}>CAREERS</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>  
  )
}

export default NavbarCmp