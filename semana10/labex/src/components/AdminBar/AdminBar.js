import React from "react";
import { useHistory } from "react-router-dom";
import { AdminBarContainer } from './styles'

export default function AdminBar () {
  const history = useHistory();
  const goToCreateTripPage = () => {
    history.push("/CreateTripPage");
  };
  const goToTripDetailsPage = () => {
    history.push("/TripDetailsPage");
  };
  return(
    <AdminBarContainer>
      <button onClick={goToCreateTripPage}>CRIAR VIAGEM</button>
      <button onClick={goToTripDetailsPage}>INSCRIÇÕES</button>
    </AdminBarContainer>
  )
}