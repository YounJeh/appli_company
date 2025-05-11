import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    padding: 2em;
    margin: 2em auto;
    width: 100%;
    background-color: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Roboto', sans-serif;
    text-align: center;
`;

const Title = styled.h2`
    margin-bottom: 1em;
    color: #333;
`;

const Paragraph = styled.p`
    margin: 0.5em 0;
    color: #555;
`;

const Link = styled.a`
    color: #007BFF;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Contact = () => (
    <Section id="contact">
        <Title>Contactez-nous</Title>
        <Paragraph>Email: <Link href="mailto:nolwenn.lepennetier@gmail.com">nolwenn.lepennetier@gmail.com</Link></Paragraph>
        <Paragraph>Téléphone: +61 405 295 900</Paragraph>
        <Paragraph>Adresse: 122 rue Charles le Goffic, 29000 Quimper, France</Paragraph>
    </Section>
);

export default Contact;