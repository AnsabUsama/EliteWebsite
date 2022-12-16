import React from "react";
import './header.css'
import LogoImg from '../assets/logoWhite.png'
import {Nav,Navbar,NavDropdown, Button } from "react-bootstrap";

function Header(){
    return(
        <div>
          <Navbar expand="lg" className="NavigationBar ">
    
          <Navbar.Brand href="#home" className="px-2">
            <div className="LogoBox"><img src={LogoImg} className='w-100' alt="" /></div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>

              <NavDropdown title="SERVICES" to = "/servicesPage" id="basic-nav-dropdown">
                <div className="dropMenu1">
                  <NavDropdown.Item className="dropMenuList py-3" href="/servicesPage/#web-development">Web Development</NavDropdown.Item>
                  <NavDropdown.Item className="dropMenuList py-3" href="/servicesPage/#Mob-development"> Mobile App Development</NavDropdown.Item>
                  <NavDropdown.Item className="dropMenuList py-3" href="#action/3.3">UI/UX Design</NavDropdown.Item>
                  <NavDropdown.Item className="dropMenuList py-3" href="#action/3.4">Deigital Marketing</NavDropdown.Item>
                  <NavDropdown.Item className="dropMenuList py-3" href="#action/3.4">Call Center</NavDropdown.Item>
                  <NavDropdown.Item className="dropMenuList py-3" href="#action/3.4">Lead Generation</NavDropdown.Item>
                </div>
              </NavDropdown>

              <Nav.Link href="/easol-partner">EASOL PARTNER </Nav.Link>
              <Nav.Link href="/work">WORK </Nav.Link>

            <NavDropdown title="COMPANY" id="basic-nav-dropdown">
              <div className="dropMenu1">
                <NavDropdown.Item className="dropMenuList py-3" href="/about-us">About Us</NavDropdown.Item>
                <NavDropdown.Item className="dropMenuList py-3" href="/career"> Career</NavDropdown.Item>
                <NavDropdown.Item className="dropMenuList py-3" href="life-at-elite-techlogix">Life at Elite Techlogix</NavDropdown.Item>
                </div>
            </NavDropdown>

            <Nav.Link href="/contact">CONTACT US</Nav.Link>
          </Nav>

      </Navbar.Collapse>
        <form class="d-flex pe-2">
          <Button className="btn quoteBtn" type="submit" >GET A QUOTE <i class="fa-solid fa-arrow-right ms-2"></i> </Button>
        </form>
  </Navbar>


        </div>
    )
}

export default Header;