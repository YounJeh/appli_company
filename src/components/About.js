import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    padding: 5em;
    margin: 0;
    background: linear-gradient(to bottom, #f1ebe0, #ffffff);
    border-radius: 12px;
    box-shadow: none;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    color: rgb(25, 58, 76);
    font-size: 1.25em;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3em;
`;

const Logo = styled.img`
    height: 125px;
    margin: 0 1.5em;
`;

const BlockContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 3em;
`;

const Block = styled.div`
    flex: 1;
    margin: 0 1.5em;
    text-align: left;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #f0f0f0;
    }

    h3 {
        text-align: center;
    }
`;

const TitleBar = styled.div`
    width: 375px;
    height: 5px;
    background-color:rgb(25, 58, 76);
    margin: 1.5em auto;
`;

const About = () => (
    <Section id="about">
        <h1>Une approche sur mesure, pensée pour vous</h1>
        <TitleBar />
        <p>Nous croyons que chaque entreprise est unique. C’est pourquoi notre démarche repose sur trois piliers :</p>
        <BlockContainer>
            <Block>
                <LogoContainer>
                <Logo src="/images/discussion_client.png" alt="Logo 1" />
                </LogoContainer>
                <h3>Diagnostic & détection des opportunités</h3>
                <p>Nous analysons vos processus pour identifier ensemble les leviers d’optimisation via l’IA : production, qualité, maintenance, logistique, prévisions…</p>
            </Block>
            <Block>
                <LogoContainer>
                <Logo src="/images/fleur_engrenage.png" alt="Logo 2" />
                </LogoContainer>
                <h3>Co-création de solutions IA pertinentes</h3>
                <p>Nous imaginons avec vous des cas d’usage concrets de l’IA adaptés à vos enjeux. Vous ne subissez pas la technologie, vous la maîtrisez.</p>
            </Block>
            <Block>
                <LogoContainer>
                <Logo src="/images/usine.png" alt="Logo 3" />
                </LogoContainer>
                <h3>Déploiement & accompagnement</h3>
                <p>Nous développons et intégrons des outils IA sur-mesure, simples à utiliser, et assurons le suivi, la formation et l’amélioration continue.</p>
            </Block>
        </BlockContainer>
    </Section>
);

export default About;