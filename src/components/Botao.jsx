import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--green);
  display: block;
  cursor: pointer;
  border: none;
  padding: 15px 40px;
  font-weight: bold;
  color: ${({ color }) => (color ? '#' + color : '#' + 101010)};
  margin: auto;
  border-radius: 4px;
`;

const Botao = ({ children }) => {
  return <Button>{children}</Button>;
};

export default Botao;
