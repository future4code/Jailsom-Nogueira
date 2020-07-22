import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { baseUrl, user, axiosConfirg } from '../../constants/axios';
import { CandidateContainer } from './styles'

export default function LoginPage () {
  const [myTrip, setMyTrip] = useState([]);
  const [candidates, setCandidates] = useState([]);

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  useEffect(() => {
    getTrips()
  }, []);

  const getTrips = () => {
    const token = window.localStorage.getItem("token");
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        auth: token
      }
    }
    axios
    .get(`${baseUrl}${user}/trip/${params.tripId}`, axiosConfig)
    .then( response => {
      setMyTrip(response.data.trip);
      setCandidates(response.data.trip.candidates);
    })
    .catch( err => {
      alert(err.message);
    })
  };

  const onClickApproval = (candidateId, choise) => {
    const token = window.localStorage.getItem("token");
    const body = {
      'approve': choise,
    };
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        auth: token
      }
    }
    axios
    .put(`${baseUrl}${user}/trips/${myTrip.id}/candidates/${candidateId}/decide`, body, axiosConfig)
    .then( response => {
      getTrips()
    })
    .catch( err => {
      alert(err.message);
    })
  };
 
  return(
    <>
      <h3>Candidatos, viagem: {myTrip.name}</h3>
      <ul>
        {candidates.map(candidate => {
        return(
          <CandidateContainer key={candidate.id}>
            <p><b>Nome:</b> {candidate.name}</p>
            <p><b>Idade:</b> {candidate.age}</p>
            <p><b>País:</b> {candidate.country}</p>
            <p><b>Profissão:</b> {candidate.profession}</p>
            <p><b>Aplicação:</b> {candidate.applicationText}</p>
            <button onClick={() => onClickApproval(candidate.id, true)}>Aprovar</button>
            <button onClick={() => onClickApproval(candidate.id, false)}>Negar</button>
          </CandidateContainer>
        )
      })}
      </ul>
    </>
  )
}
