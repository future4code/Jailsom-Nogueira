import React, { useState } from 'react';
import { PossibleMatchContainer, PersonData } from './style';

export default function PossibleMatch (props) {
  const [sideToSwipe, setSideToSwipe] = useState(props.sideToSwipe) //aqui recebo a escolha do swipe e guardo no estado
  console.log(sideToSwipe) //aqui consigo conferir estes escolha
  return(
    <PossibleMatchContainer animation={sideToSwipe}> {/*aqui tentei enviar esta escolha para o styled-component*/}
      <img src={props.photo} alt="Person" />
      <div>
        <PersonData>
          <h2>{props.name}, </h2>
          <h4>{props.age}</h4>
        </PersonData>
        <span>{props.bio}</span>
      </div>
    </PossibleMatchContainer>
  )
}
