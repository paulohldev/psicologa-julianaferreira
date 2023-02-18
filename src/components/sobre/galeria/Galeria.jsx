import React from 'react';
import styled from 'styled-components';
import photo1 from '../../../assets/images/photo1.png';
import photo2 from '../../../assets/images/photo2.png';
import photo3 from '../../../assets/images/photo3.png';
import photo4 from '../../../assets/images/photo4.png';
import Titulo from '../../Titulo';

const Image = styled.img`
  max-width: 100%;
  display: block;
  width: 100%;
  object-fit: cover;
  height: 340px;
  border-radius: 4px;
`;

const GradientImage = styled.div`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0),
      rgba(30, 30, 30, 0.6) 66.67%
    );
    border-radius: 4px;
  }
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 790px) {
    grid-template-columns: 1fr;
  }
  gap: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Div = styled.div`
  position: relative;
`;

const Link = styled.a`
  text-decoration: none;
  position: absolute;
  bottom: 40px;
  left: 20px;
  color: var(--white);
  width: ${({ width }) => (width ? width + 'px' : 'auto')};
  /* font-size: 12px; */
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
  z-index: 2;
`;

const Galeria = () => {
  return (
    <Article>
      <Div>
        <GradientImage>
          <Image src={photo1} alt="Foto 1" />
          <Titulo subtitle>
            <Link width={330} href="#">
              Terapia Cognitivo Comportamental
            </Link>
          </Titulo>
        </GradientImage>
      </Div>
      <Div>
        <GradientImage>
          <Image src={photo2} alt="Foto 2" />
          <Titulo subtitle>
            <Link width={300} href="#">
              Terapia Centrada na Pessoa
            </Link>
          </Titulo>
        </GradientImage>
      </Div>
      <Div>
        <GradientImage>
          <Image src={photo3} alt="Foto 3" />
          <Titulo subtitle>
            <Link width={254} href="#">
              Terapia Interpessoal
            </Link>
          </Titulo>
        </GradientImage>
      </Div>
      <Div>
        <GradientImage>
          <Image src={photo4} alt="Foto 4" />
          <Titulo subtitle>
            <Link width={330} href="#">
              Terapia de Aceitação e Compromisso
            </Link>
          </Titulo>
        </GradientImage>
      </Div>
    </Article>
  );
};

export default Galeria;
