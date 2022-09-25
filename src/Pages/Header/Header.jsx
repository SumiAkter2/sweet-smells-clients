import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CustomLink from './CustomLink';
import './Header.css'

const Header = () => {
   
   
    return (
        <div>
             <Navbar bg="light" variant="light">
        <Container >
                    <Navbar.Brand to="/">
                         <img
              alt="perfume-logo"
              src="https://i.ibb.co/6FGcSkz/logo-removebg-preview-1.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />Sweet Smells </Navbar.Brand>
                    <Nav className=" justify-content-end">
                       
                     
                         <CustomLink className='header' to="/">Home</CustomLink>
                        
                    
          <CustomLink className='header'  to="/products">Products</CustomLink>
                       <CustomLink className='header' to="/pricing">Pricing</CustomLink>
                     
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;