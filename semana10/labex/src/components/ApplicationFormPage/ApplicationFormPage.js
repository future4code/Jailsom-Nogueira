import React, { useState, useEffect } from 'react';
import useInput from '../../hooks/useInput';
import { PageContainer, FormContainer } from './styles';
import ListTripsComponent from '../ListTripsComponent/ListTripsComponent'

import axios from 'axios';
import { baseUrl, user} from '../../constants/axios';


export default function ApplicationFormPage() {
  const [trip, updateTrip] = useInput('');
  const [name, updateName] = useInput('');
  const [age, updateAge] = useInput('');
  const [profession, updateProfession] = useInput('');
  const [country, updateCountry] = useInput('');
  const [description, updateDescription] = useInput('');

  const [allTrips, setAllTrips] = useState([]);

  useEffect(() => {
    axios
    .get(`${baseUrl}${user}/trips/` )
    .then( response => {
      setAllTrips(response.data.trips);
    })
    .catch( err => {
      alert(err.message);
    })
  },[]);
  
  const sendApply = () => {
    const body = {
      "name": `${name}`,
      "age": `${age}`,
      "profession": `${profession}`,
      "country": `${country}`,
      "applicationText": `${description}`,
    };
    axios
    .post(`${baseUrl}${user}/trips/${trip}/apply`, body)
    .then( response => {
      alert("Inscrição enviada!");
    })
    .catch( err => {
      alert(err.message);
    })
  };

  return (
    <PageContainer>
      <FormContainer>
        <h1>INSCREVA-SE AQUI</h1>
        <select value={trip} onChange={updateTrip}>
          <option defaultValue>Escolha aqui a sua viagem</option>
          {allTrips.map(trip => {
            return(
              <option value={trip.id} key={trip.id}>{trip.name}</option>
              )
          })}
        </select>
        <h2>DADOS PESSOAIS</h2>
        <input type='text' placeholder='Seu nome' value={name} onChange={updateName} />
        <input type='number' placeholder='Sua idade' value={age} onChange={updateAge} />
        <input type='text' placeholder='Sua profissão' value={profession} onChange={updateProfession} />
        <select value={country} onChange={updateCountry}>
          <option defaultValue>País de origem</option>
          <option value='Brasil'>Brasil</option>
          <option value='EUA'>EUA</option>
          <option value='Canadá'>Canadá</option>
        </select>
        <textarea rows='6' cols='40' placeholder='Porque sou um bom candidato(a)?' value={description} onChange={updateDescription} />
        <button onClick={sendApply}>Enviar</button>
      </FormContainer>
      <ListTripsComponent />
    </PageContainer>
  );
}