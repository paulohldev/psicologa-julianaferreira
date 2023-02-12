import React from 'react';
import styled from 'styled-components';
import Botao from '../Botao';
import Paragrafo from '../Paragrafo';
import Titulo from '../Titulo';
import Galeria from './galeria/Galeria';

const Section = styled.section`
  background-color: var(--white);
  padding-bottom: 90px;
`;

const Sobre = () => {
  return (
    <Section>
      <div className="container">
        <Titulo paddingTop={90}>Terapia Online</Titulo>
        <Paragrafo top={30} fontSize={18}>
          A terapia online é uma opção conveniente para aqueles que buscam
          tratamento para suas preocupações emocionais, sem precisar se deslocar
          até o consultório. Durante as sessões online, é utilizada uma
          variedade de técnicas e abordagens terapêuticas, incluindo terapia
          cognitivo-comportamental e terapia centrada na pessoa, para ajudar os
          pacientes a compreender e superar suas questões emocionais.
        </Paragrafo>
        <Paragrafo top={20} fontSize={18}>
          A psicóloga Juliana Ferreira se dedica a oferecer terapia de qualidade
          acessível, fornecendo um ambiente seguro e acolhedor para que seus
          pacientes possam compartilhar suas preocupações e trabalhar juntos
          para encontrar soluções. Se você está procurando por uma terapia
          eficaz, realizada por uma psicóloga competente e dedicada, a terapia
          online com Juliana Ferreira pode ser a escolha certa para você.
        </Paragrafo>
        <Galeria />
        <Botao>CONTATAR PSICÓLOGA</Botao>
      </div>
    </Section>
  );
};

export default Sobre;
