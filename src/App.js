import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import styled from 'styled-components';

const AppContainer = styled.div`
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #ecf0f1;
`;

const App = () => (
    <AppContainer>
        <Header />
        <About />
        <Services />
        <Contact />
        <Footer />
    </AppContainer>
);

export default App;