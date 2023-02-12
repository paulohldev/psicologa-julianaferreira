import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-family: 'Barlow', sans-serif;
  font-weight: ${({ semibold }) => (semibold ? 'semibold' : 'regular')};
  color: ${({ color }) => (color ? '#' + color : 'var(--black)')};
  max-width: ${({ width }) => (width ? width + 'px' : '540px')};
  line-height: 1.5;
  margin-top: ${({ top }) => (top ? top + 'px' : 0)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '1rem')};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

const Paragrafo = ({ children, ...props }) => {
  return <Paragraph {...props}>{children}</Paragraph>;
};

export default Paragrafo;
