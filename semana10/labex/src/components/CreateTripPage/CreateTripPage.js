import React from 'react';
import {CreateTripPageContainer, FormContainer} from './styles';
import ListTripsPage from '../ListTripsPage/ListTripsPage'

export default function CreateTripPage() {
  return (
    <CreateTripPageContainer>
      <FormContainer>
        <h1>NOVA VIAGEM</h1>
        <input type='text' placeholder='Nome da viagem'></input>
        <select>
          <option value='' selected>Planeta</option>
          <option value=''>Marte</option>
          <option value=''>Saturno</option>
          <option value=''>Venus</option>
        </select>
        <input type='date' placeholder='Data da partida'></input>
        <input type='number' placeholder='Duração'></input>
        <textarea rows="6" cols="40" placeholder='Descrição'></textarea>
        <button>Criar</button>
      </FormContainer>
      <ListTripsPage />
    </CreateTripPageContainer>
  );
}