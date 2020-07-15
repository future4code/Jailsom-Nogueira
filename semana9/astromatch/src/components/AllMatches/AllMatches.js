import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl, user } from '../../constants/Index';
import { AllMatchsContainer, MathList, MatchAvatar } from './style'

export default function AllMatches (props) {
  const [myMatches, setMyMatches] = useState([]);
  
  useEffect(() => {
      axios
      .get(`${baseUrl}${user}/matches`)
      .then( response => {
        setMyMatches(response.data.matches);
        console.log(myMatches)
      })
      .catch( err => {
        alert(err.message);
      })
  }, [props.emptyList]);

  return(
    <AllMatchsContainer>
      <MathList>
        {myMatches.map(match => {
          return(
            <MatchAvatar key={match.id}>
              <img src={match.photo} alt="Avatar" />
              <span>{match.name}</span>
            </MatchAvatar>
          )
        })}
      </MathList>
    </AllMatchsContainer>
  )
}
