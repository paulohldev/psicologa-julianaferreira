import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Merriweather', serif;
  font-weight: bold;
  color: var(--black);
  font-size: ${({ subtitle, customer, link }) =>
    subtitle
      ? '2rem'
      : '2.625rem' && customer
      ? '1rem'
      : '2.625rem' && link
      ? '1.125rem'
      : '2.625rem'};
`;

const Titulo = ({ children }) => {
  return <Title>{children}</Title>;
};

export default Titulo;
