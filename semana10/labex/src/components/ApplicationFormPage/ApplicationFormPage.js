import React from 'react';
import { PageContainer, FormContainer } from './styles';
import ListTripsPage from '../ListTripsPage/ListTripsPage'

export default function ApplicationFormPage() {
  return (
    <PageContainer>
      <FormContainer>
        <h1>INSCREVA-SE AQUI</h1>
        <select>
          <option value='' selected>Escolha aqui a sua viagem</option>
          <option value=''>Marte</option>
          <option value=''>Lua</option>
          <option value=''>Venus</option>
        </select>
        <h2>DADOS PESSOAIS</h2>
        <input type='text' placeholder='Seu nome'></input>
        <input type='number' placeholder='Sua idade'></input>
        <input type='text' placeholder='Sua profissão'></input>
        <select>
          <option value='' selected>País de origem</option>
          <option value=''>Brasil</option>
          <option value=''>EUA</option>
          <option value=''>Canadá</option>
        </select>
        <textarea rows="6" cols="40" placeholder='Porque sou um bom candidato(a)?'></textarea>
        <button>Enviar</button>
      </FormContainer>
      <ListTripsPage />
    </PageContainer>
  );
}