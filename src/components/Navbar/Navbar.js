import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar , Nav} from 'react-bootstrap';

const navbar = () => {
    return (
        <>
        <Navbar>
        
            <Nav className="mr-auto">
            
                <Link style={{margin:'10px'}} to="/home">Home</Link> 
                <Link style={{margin:'10px'}}to="/login">Login</Link>
                <Link style={{margin:'10px'}}to="/destination">Destination</Link>
                <Link style={{margin:'10px'}}to="/contact">Contact</Link>
            
            </Nav>
        </Navbar>
    </>
    );
};

export default navbar;