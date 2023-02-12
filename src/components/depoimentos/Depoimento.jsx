import React from 'react';
import styled from 'styled-components';
import Customer01 from '../../assets/images/customer01.png';
import Paragrafo from '../Paragrafo';

const Image = styled.img`
  display: block;
  max-width: 100%;
`;

const DivBg = styled.div`
  background-color: var(--white);
  border-radius: 4px;
  margin-top: 50px;
`;

const Span = styled.span`
  font-family: 'Merriweather', sans-serif;
  font-weight: bold;
  font-size: 1rem;
  padding-top: 8px;
`;

const Dot = styled.div`
  background-color: var(--white);
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;

const Depoimento = () => {
  return (
    <>
      <DivBg>
        <Image src={Customer01} alt="Maria Clara" />
      </DivBg>
      <Span>Maria Clara</Span>
      <Paragrafo center top={20} color={616161}>
        A terapia online com a Dra. Juliana foi uma verdadeira bênção em minha
        vida. Eu estava passando por um momento difícil e não sabia como lidar
        com tudo, mas graças à sua ajuda, eu consegui superar e ver as coisas de
        uma forma diferente.
      </Paragrafo>
      <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </div>
    </>
  );
};

export default Depoimento;
