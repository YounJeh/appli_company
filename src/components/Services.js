import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    padding: 2em;
    margin: 2em 0;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Services = () => (
    <Section id="services">
        <h2>Nos Services</h2>
        <ul>
            <li>Analyse de données</li>
            <li>Visualisation de données</li>
            <li>Modélisation prédictive</li>
            <li>Consulting en data science</li>
        </ul>
    </Section>
);

export default Services;