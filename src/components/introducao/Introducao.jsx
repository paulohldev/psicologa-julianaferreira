import React from 'react';
import Titulo from '../Titulo';
import Paragrafo from '../Paragrafo';
import styled from 'styled-components';
import Foto from '../../assets/images/Psicologa.png';

const Image = styled.img`
  display: block;
  max-width: 100%;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 766px) {
    flex-direction: column;
    padding-top: 40px;
  }
`;

const Introducao = () => {
  return (
    <Section className="container">
      <div>
        <Titulo>Juliana Ferreira</Titulo>
        <Titulo role>PSICÓLOGA</Titulo>
        <Paragrafo top={30} fontSize={18}>
          Psicóloga clínica altamente capacitada, formada pela Universidade
          Federal de Pernambuco. Com mais de dez anos de experiência na área da
          saúde mental, especializada em tratar uma ampla gama de questões,
          incluindo ansiedade, depressão, estresse, problemas de relacionamento
          e dificuldades emocionais.
        </Paragrafo>
      </div>
      <Image src={Foto} alt="Psicóloga Juliana Ferreira" />
    </Section>
  );
};

export default Introducao;
