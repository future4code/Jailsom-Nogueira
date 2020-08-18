import React from 'react';

import InversaoTexto from './components/InversaoTexto';
import ChecaPalindromo from './components/ChecaPalindromo';
import ChecaCombinacoes from './components/ChecaCombinacoes';
import OrdemAlfabetica from './components/OrdemAlfabetica';
import PrimeiraMaiuscula from './components/PrimeiraMaiuscula';

import { 
  Exercicios, 
} from './styles'

function App() {
  return (
    <Exercicios>
      <InversaoTexto />
      <ChecaPalindromo />
      <ChecaCombinacoes />
      <OrdemAlfabetica />
      <PrimeiraMaiuscula />
    </Exercicios>
  );
}

export default App;
