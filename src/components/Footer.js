import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px 0;
  background-color: #2c3e50;
  color: white;
  position: static;
  width: 100%;
  box-sizing: border-box;
  bottom: 0;
  font-family: 'Roboto', sans-serif;
  border-top: 2px solid #34495e;
`;

const FooterText = styled.p`
  margin: 5px 0;
  font-size: 14px;
`;

const FooterLink = styled.a`
  color: #ecf0f1;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => (
    <FooterContainer>
    <FooterText>&copy; 2025 Skedia. Tous droits réservés.</FooterText>
    <FooterText>Création de <FooterLink href="https://www.skedia.com" target="_blank" rel="noopener noreferrer">Skedia</FooterLink></FooterText>
    </FooterContainer>
);

export default Footer;