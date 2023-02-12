import Depoimento from './components/depoimentos/Depoimento';
import Header from './components/header/Header';
import Introducao from './components/introducao/Introducao';
import Sobre from './components/sobre/Sobre';

function App() {
  return (
    <div>
      <Header />
      <Introducao />
      <Sobre />
      <Depoimento />
    </div>
  );
}

export default App;
