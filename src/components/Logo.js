import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1ebe0;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  box-shadow: none;
`;

const Logo = styled.img`
  width: 80%;
  height: auto;
  object-fit: cover;
  transform: translateY(10%);
`;

const LogoComponent = () => (
  <LogoContainer>
    <Logo src="/images/logo.png" alt="Logo Skelia" />
  </LogoContainer>
);

export default LogoComponent;