import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #2c3e50;
    color: white;
    padding: 1em 0;
    text-align: center;
`;

const Nav = styled.nav`
    ul {
        list-style: none;
        padding: 0;
    }

    li {
        display: inline;
        margin: 0 1em;
    }

    a {
        color: white;
        text-decoration: none;
    }
`;

const Header = () => (
    <HeaderContainer>
        <h1>Bienvenue chez Mon Entreprise de Data Science</h1>
        <Nav>
            <ul>
                <li><a href="#about">À propos</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </Nav>
    </HeaderContainer>
);

export default Header;