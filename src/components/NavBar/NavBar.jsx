import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function BasicExample() {
    return (
    <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand><Link to='/'>
            <img src="./logo.png"/>
            </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
            <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to="/productos/indumentaria">Indumentaria</Link></NavDropdown.Item>
            <NavDropdown.Item> <Link to="/productos/protecciones">Protecciones</Link></NavDropdown.Item>
            </NavDropdown>
            <Link to="/cart"><CartWidget/></Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}
export default BasicExample;

