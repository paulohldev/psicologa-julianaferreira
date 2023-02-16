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
  transition: 0.3s all;
  position: relative;
  margin-bottom: ${({ menuMobile }) => (menuMobile ? '130px' : '0')};
`;

const Navigation = styled.nav``;

const ButtonMobile = styled.button`
  display: none;
  padding: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media (max-width: 800px) {
    display: block;
  }
  &::after {
    content: '';
    display: block;
    height: 3px;
    background-color: #161616;
    width: 20px;
    box-shadow: 0 6px 0 #161616, 0 -6px 0 #161616;
  }
`;

const ListMenuMobile = styled.ul`
  display: none;
  list-style: none;
  @media (max-width: 800px) {
    display: ${({ menuMobile }) => (menuMobile ? 'block' : 'none')};
    position: absolute;
    top: 100px;
    left: 0;
    background-color: var(--white);
    width: 100%;
    margin: 0;
  }
`;

const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  @media (max-width: 800px) {
    display: none;
  }
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
    height: 2px;
    width: 0px;
    transition: 0.3s all;
    position: relative;
    bottom: -5px;
    @media (max-width: 800px) {
      display: none;
    }
  }
  &:hover {
    ::after {
      width: 100%;
    }
    @media (max-width: 800px) {
      background-color: var(--blue);
    }
  }
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
`;

const Header = () => {
  const [menuMobile, setMenuMobile] = React.useState(false);

  const handleClick = () => {
    setMenuMobile(!menuMobile);
  };

  return (
    <HeaderBackground>
      <HeaderPrincipal className="container" menuMobile={menuMobile}>
        <Image src={Logo} alt="Logo Juliana Ferreira Psicológa" />
        <Navigation>
          <ButtonMobile
            onClick={handleClick}
            menuMobile={menuMobile}
          ></ButtonMobile>
          <ListMenuMobile menuMobile={menuMobile}>
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
          </ListMenuMobile>
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
