import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Container } from 'react-bootstrap';


const Header = () => {
    return (
        <header>
            <Container>
                <NavBar />
            </Container>
        </header>
    );
};

export default Header;