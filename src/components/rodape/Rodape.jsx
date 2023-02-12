import React from 'react';
import styled from 'styled-components';
import LogoFooter from '../../assets/images/LogoFooter.png';
import Titulo from '../Titulo';

const FooterBg = styled.footer`
  background-color: transparent;
  border-top: 1px solid var(--black);
  width: 100%;
  height: 220px;
`;

const Image = styled.img`
  max-width: 100%;
  display: block;
`;

const Lista = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DivFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
`;

const Rodape = () => {
  return (
    <FooterBg>
      <DivFooter className="container">
        <Image src={LogoFooter} alt="Logo" />
        <div>
          <Lista>
            <li>
              <Titulo link>81 0000-0000</Titulo>
            </li>
            <li>
              <Titulo link>contato@julianapsicologa.com.br</Titulo>
            </li>
            <li>
              <Titulo link>@julianaf.psicologa</Titulo>
            </li>
          </Lista>
        </div>
      </DivFooter>
    </FooterBg>
  );
};

export default Rodape;
