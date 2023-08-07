// eslint-disable-next-line no-unused-vars
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
           < Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand ><Link to='/'>Job Hunter</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link ><Link to='/applied'>Applied Jobs</Link></Nav.Link>
          </Nav>
          <button className='btn btn-primary'>Start Now</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;