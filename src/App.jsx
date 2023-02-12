import Depoimentos from './components/depoimentos/Depoimentos';
import Header from './components/header/Header';
import Introducao from './components/introducao/Introducao';
import Sobre from './components/sobre/Sobre';
import Contato from './components/contato/Contato';
import Rodape from './components/rodape/Rodape';

function App() {
  return (
    <div>
      <Header />
      <Introducao />
      <Sobre />
      <Depoimentos />
      <Contato />
      <Rodape />
    </div>
  );
}

export default App;
