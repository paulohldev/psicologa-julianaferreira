import React from 'react';
import styled from 'styled-components';
import Titulo from '../Titulo';
import Depoimento from './Depoimento';

const BgDepoimento = styled.section`
  background-color: var(--blue);
  padding-bottom: 200px;
`;

const DepoimentoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Depoimentos = () => {
  return (
    <BgDepoimento>
      <DepoimentoContainer className="container">
        <Titulo paddingTop={90}>Depoimentos</Titulo>
        <Depoimento />
      </DepoimentoContainer>
    </BgDepoimento>
  );
};

export default Depoimentos;
