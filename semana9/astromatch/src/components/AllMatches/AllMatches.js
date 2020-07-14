import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../constants/Index';
import { AllMatchsContainer, MatchAvatar } from './style'

const AllMatches = () => {
  const [myMatches, setMyMatches] = useState([]);
  
  useEffect(() => {
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
  })

  return(
    <AllMatchsContainer>
      <MatchAvatar />
      <span>Nome do crush</span>
    </AllMatchsContainer>
  )
}

export default AllMatches