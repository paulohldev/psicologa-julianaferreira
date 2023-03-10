import React from 'react';
import styled from 'styled-components';
import Customer01 from '../../assets/images/customer01.png';
import Customer02 from '../../assets/images/customer02.png';
import Customer03 from '../../assets/images/customer03.png';
import Customer04 from '../../assets/images/customer04.png';
import Paragrafo from '../Paragrafo';

const Image = styled.img`
  display: block;
  max-width: 100%;
`;

const DivBg = styled.div`
  background-color: var(--white);
  border-radius: 4px;
  margin-top: 50px;
  width: 300px;
`;

const Span = styled.span`
  font-family: 'Merriweather', sans-serif;
  font-weight: bold;
  font-size: 1rem;
  display: block;
  padding-top: 8px;
`;

const Dot = styled.div`
  background-color: var(--white);
  height: 20px;
  width: 20px;
  border-radius: 50%;
  transition: 0.3s all ease-in-out;
`;

const Slide = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const Lista = styled.ul`
  display: flex;
  transition: 0.5s all ease-in-out;
  gap: 20px;
`;

const Li = styled.li`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

const Depoimento = () => {
  const [index, setIndex] = React.useState(0);
  const ref = React.useRef();
  const slide = React.useRef();
  const dot = React.useRef();

  const changeSlide = () => {
    const slideLength = slide.current.querySelectorAll('li').length;
    const gap = 20;
    const elementWidth = ref.current.offsetWidth + gap;
    slide.current.style.transform = `translateX(${-(elementWidth * index)}px)`;

    setTimeout(() => {
      setIndex((index + 1) % slideLength);
    }, 3000);
  };

  const changeDot = () => {
    const dots = dot.current.querySelectorAll('div');
    dots.forEach((dot, i) => {
      dot.style.backgroundColor = i === index ? '#9df6c6' : '#fff';
    });
  };

  React.useEffect(() => {
    changeSlide();
    changeDot();
  }, [index]);

  return (
    <>
      <Slide>
        <Lista ref={slide}>
          <Li ref={ref}>
            <DivBg>
              <Image src={Customer01} alt="Maria Clara" />
            </DivBg>
            <Span>Maria Clara</Span>
            <Paragrafo center top={20} color={616161}>
              A terapia online com a Dra. Juliana foi uma verdadeira b??n????o em
              minha vida. Eu estava passando por um momento dif??cil e n??o sabia
              como lidar com tudo, mas gra??as ?? sua ajuda, eu consegui superar e
              ver as coisas de uma forma diferente.
            </Paragrafo>
          </Li>
          <Li>
            <DivBg>
              <Image src={Customer02} alt="Ana" />
            </DivBg>
            <Span>Ana</Span>
            <Paragrafo center top={20} color={616161}>
              A Dra. Juliana ?? uma pessoa incr??vel, com um cora????o enorme e uma
              habilidade incr??vel para ajudar as pessoas. Eu recomendo seus
              servi??os a todos que precisam de ajuda psicol??gica.
            </Paragrafo>
          </Li>
          <Li>
            <DivBg>
              <Image src={Customer03} alt="Rafael" />
            </DivBg>
            <Span>Rafael</Span>
            <Paragrafo center top={20} color={616161}>
              Eu estava relutante em come??ar a terapia online, mas depois de
              algumas sess??es com a Dra. Juliana, eu percebi o quanto ??
              conveniente e eficaz. Ela ?? uma verdadeira profissional e eu sinto
              muito sortudo por ter encontrado seus servi??os.
            </Paragrafo>
          </Li>
          <Li>
            <DivBg>
              <Image src={Customer04} alt="Lucas" />
            </DivBg>
            <Span>Lucas</Span>
            <Paragrafo center top={20} color={616161}>
              Eu recomendo os servi??os da Dra. Juliana para qualquer pessoa que
              esteja procurando por ajuda psicol??gica. Ela ?? uma pessoa
              incr??vel, com uma habilidade ??nica para ajudar as pessoas a
              superar desafios emocionais.
            </Paragrafo>
          </Li>
        </Lista>
      </Slide>
      <div
        ref={dot}
        style={{ display: 'flex', gap: '20px', marginTop: '30px' }}
      >
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </div>
    </>
  );
};

export default Depoimento;
