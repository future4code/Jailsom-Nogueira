import React from 'react';
import {PossibleMatchContainer, PersonData} from './style';

const PossibleMatch = () => {
  return(
    <PossibleMatchContainer>
      <img src ="https://picsum.photos/536/354" />
      <PersonData>
        <h1>Nome,</h1>
        <h3>Idade</h3>
      </PersonData>
      <span>Descrição aqui, Descrição aqui, Descrição aqui, 
        Descrição aqui, Descrição aqui, Descrição aqui, 
      </span>
    </PossibleMatchContainer>
  )
}

export default PossibleMatch