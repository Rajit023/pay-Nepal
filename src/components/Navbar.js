import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

 const TopNavbar = () => {
    return (
        <div className ="container-fluid">
            <div className='row'>
                <div className= "col-10" mx-auto>
             

        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="about">About</Nav.Link>
        <Nav.Link href="service">Service</Nav.Link>
        <Nav.Link href="contact">Contact</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
</div>
</div>
    )
}

export default TopNavbar;