import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {CreateTripPageContainer, FormContainer} from './styles';
import ListTripsComponent from '../ListTripsComponent/ListTripsComponent'


export default function CreateTripPage() {
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  return (
    <CreateTripPageContainer>
      <FormContainer>
        <h1>NOVA VIAGEM</h1>
        <input type='text' placeholder='Nome da viagem'></input>
        <select>
          <option >Planeta</option>
          <option value=''>Marte</option>
          <option value=''>Saturno</option>
          <option value=''>Venus</option>
        </select>
        <input type='date' placeholder='Data da partida'></input>
        <input type='number' placeholder='Duração'></input>
        <textarea rows="6" cols="40" placeholder='Descrição'></textarea>
        <button>Criar</button>
      </FormContainer>
      <ListTripsComponent />
    </CreateTripPageContainer>
  );
}