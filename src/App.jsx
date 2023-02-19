import React from 'react';
import Depoimentos from './components/depoimentos/Depoimentos';
import Header from './components/header/Header';
import Introducao from './components/introducao/Introducao';
import Sobre from './components/sobre/Sobre';
import Contato from './components/contato/Contato';
import Rodape from './components/rodape/Rodape';

function App() {
  return (
    <>
      <Header />
      <Introducao />
      <Sobre />
      <Depoimentos />
      <Contato />
      <Rodape />
    </>
  );
}

export default App;
