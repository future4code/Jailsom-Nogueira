import React from "react";
import { useHistory } from "react-router-dom";
import { LoginCard } from './styles'

export default function LoginPage () {
  const history = useHistory();

  const goToCreateTripPage = () => {
    history.push("/CreateTripPage");
  };
  return(
    <LoginCard>
      <h1>CANDIDATOS</h1>
      <input type='text' placeholder='Seu email'></input>
      <input type='text' placeholder='Sua senha'></input>
      <button onClick={goToCreateTripPage}>Entrar</button>
    </LoginCard>
  )
}