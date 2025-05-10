import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    text-align: center;
    padding: 1em 0;
    background-color: #2c3e50;
    color: white;
    position: fixed;
    width: 100%;
    bottom: 0;
`;

const Footer = () => (
    <FooterContainer>
        <p>&copy; 2023 Mon Entreprise de Data Science. Tous droits réservés.</p>
    </FooterContainer>
);

export default Footer;