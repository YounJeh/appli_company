import React from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box; // Ajouter cette ligne
  background-color: rgba(44, 62, 80, 0.95);
  color: white;
  padding: 1em 2em;
  text-align: center;
  z-index: 1000;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 2em;
  }

  li {
    display: inline;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #1E90FF;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;

  img {
    height: 40px;
  }
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5em;
  transition: color 0.3s ease;

  &:hover {
    color: #1E90FF;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>
      <img src="/images/logo.png" alt="Skedia Logo" />
      <h1>SKEDIA</h1>
    </Logo>
    <Nav>
      <ul>
        <li><a href="#about">À propos</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </Nav>
    <SocialLink href="https://www.linkedin.com/company/skediabzh" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </SocialLink>
  </HeaderContainer>
);

export default Header;