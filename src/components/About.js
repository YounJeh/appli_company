import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    padding: 2em;
    margin: 2em 0;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const About = () => (
    <Section id="about">
        <h2>À propos de nous</h2>
        <p>Nous sommes une entreprise spécialisée dans la data science, offrant des solutions innovantes pour répondre à vos besoins analytiques.</p>
    </Section>
);

export default About;