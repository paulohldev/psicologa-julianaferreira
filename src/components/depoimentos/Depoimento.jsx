import React from 'react';
import styled from 'styled-components';
import Titulo from '../Titulo';

const BgDepoimento = styled.section`
  background-color: var(--blue);
`;

const DepoimentoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Depoimento = () => {
  return (
    <BgDepoimento>
      <DepoimentoContainer className="container">
        <Titulo paddingTop={90}>Depoimentos</Titulo>
      </DepoimentoContainer>
    </BgDepoimento>
  );
};

export default Depoimento;
