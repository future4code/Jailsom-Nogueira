import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../constants/Index';
import { AllMatchsContainer, MatchAvatar } from './style'

const AllMatches = () => {
  const [myMatches, setMyMatches] = useState([]);
  
  useEffect(() => {
    getMatches()
  }, []);

  const getMatches = () => {
    axios
    .get(
      'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jailsom-nogueira-turing/matches'
      )
    .then( response => {
      setMyMatches(response.data.matches);
    })
    .catch( err => {
      alert(err.message);
    })
  }

  return(
    <AllMatchsContainer>
      <ul>
        {myMatches.map(match => {
          return(
            <MatchAvatar key={match.id}>
              <img src={match.photo} alt="Avatar" />
              <span>{match.name}</span>
            </MatchAvatar>
          )
        })}
      </ul>

      {/* <MatchAvatar />
      <span>Nome do crush</span> */}
    </AllMatchsContainer>
  )
}

export default AllMatches