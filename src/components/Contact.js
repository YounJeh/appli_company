import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    padding: 2em;
    margin: 2em 0;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Contact = () => (
    <Section id="contact">
        <h2>Contactez-nous</h2>
        <p>Email: <a href="mailto:youn.jehanno@gmail.com">youn.jehanno@gmail.com</a></p>
        <p>Téléphone: +12 345 678 90</p>
        <p>Adresse: 123 Rue de la Data Science, 75000 Paris, France</p>
    </Section>
);

export default Contact;