import React from 'react';
import { useHistory } from 'react-router-dom';
import { AdminBarContainer } from './styles'

export default function AdminBar () {
  const history = useHistory();

  const goToCreateTripPage = () => {
    history.push('/admin/create-trip');
  };

  const goToAllTripsPage = () => {
    history.push('/admin/all-trips');
  };

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  return(
    <AdminBarContainer>
      <b>Área de acesso restrito</b>
      <div>
        <button onClick={goToCreateTripPage}>CRIAR VIAGEM</button>
        <button onClick={goToAllTripsPage}>VIAGENS</button>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    </AdminBarContainer>
  )
}