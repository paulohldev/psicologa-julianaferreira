import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/Logo.svg';

const HeaderBackground = styled.div`
  background-color: var(--white);
  width: 100%;
`;

const HeaderPrincipal = styled.header`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.nav``;

const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const List = styled.li``;

const Link = styled.a`
  display: block;
  font-family: 'Merriweather', serif;
  font-weight: ${({ semibold, bold }) =>
    semibold ? 'semibold' : 'regular' && bold ? 'bold' : 'regular'};
  color: var(--black);
  text-decoration: none;
  padding: 10px 20px;
  &::after {
    content: '';
    display: block;
    background-color: var(--black);
    height: 4px;
    width: 0px;
    transition: 0.3s all;
    position: relative;
    bottom: -5px;
  }
  &:hover {
    ::after {
      width: 100%;
    }
  }
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
`;

const Header = () => {
  return (
    <HeaderBackground>
      <HeaderPrincipal className="container">
        <Image src={Logo} alt="Logo Juliana Ferreira Psicológa" />
        <Navigation>
          <ListContainer>
            <List>
              <Link bold href="#">
                Sobre
              </Link>
            </List>
            <List>
              <Link bold href="#">
                Depoimentos
              </Link>
            </List>
            <List>
              <Link bold href="#">
                Contato
              </Link>
            </List>
          </ListContainer>
        </Navigation>
      </HeaderPrincipal>
    </HeaderBackground>
  );
};

export default Header;
