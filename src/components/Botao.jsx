import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? '#' + backgroundColor : 'var(--green)'};
  display: block;
  cursor: pointer;
  border: none;
  padding: 15px 40px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ color }) => (color ? '#' + color : '#' + 101010)};
  margin: auto;
  border-radius: 4px;
  font-family: 'Barlow', sans-serif;
`;

const Botao = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default Botao;
