import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Merriweather', serif;
  font-weight: bold;
  color: var(--black);
  font-size: ${({ subtitle, customer, link, role }) =>
    subtitle
      ? '2rem'
      : '2.625rem' && customer
      ? '1rem'
      : '2.625rem' && link
      ? '1.125rem'
      : '2.625rem' && role
      ? '1.25rem'
      : '2.625rem'};
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop + 'px' : 0)};
`;

const Titulo = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};

export default Titulo;
