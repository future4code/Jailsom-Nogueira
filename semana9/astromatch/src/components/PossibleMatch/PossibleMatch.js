import React from 'react';
import {PossibleMatchContainer, PersonData} from './style';

export default function PossibleMatch (props) {
  return(
    <PossibleMatchContainer>
      <img src={props.photo} alt="Person" />
      <PersonData>
        <h2>{props.name}, </h2>
        <h4>{props.age}</h4>
      </PersonData>
      <span>{props.bio}</span>
    </PossibleMatchContainer>
  )
}
