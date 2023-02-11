import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-family: 'Barlow', sans-serif;
  font-weight: ${({ semibold }) => (semibold ? 'semibold' : 'regular')};
  color: var(--black);
`;

const Paragrafo = ({ children }) => {
  return <Paragraph>{children}</Paragraph>;
};

export default Paragrafo;
