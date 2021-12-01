import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/home" className="text-warning fw-normal fs-3 p-2">Tanseer's Portfolio!</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <button className="btn btn-warning m-3 p-2"> <a className="text-decoration-none fw-bolder text-dark" href="https://drive.google.com/file/d/1l28SpQBY9qI5RgU5XcY9z3MWlPXMwIEo/view?usp=sharing"
                        rel="noreferrer" target="_blank" >Download Resume</a></button>
                        <Nav.Link as={HashLink} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact">Contact Me</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;

