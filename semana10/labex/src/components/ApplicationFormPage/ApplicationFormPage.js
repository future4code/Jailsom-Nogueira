import React from 'react';
import useInput from '../../hooks/useInput';
import { PageContainer, FormContainer } from './styles';
import ListTripsPage from '../ListTripsPage/ListTripsPage'

export default function ApplicationFormPage() {
  const [planet, updatePlanet] = useInput("");
  const [name, updateName] = useInput("");
  const [age, updateAge] = useInput("");
  const [profession, updateProfession] = useInput("");
  const [country, updateCountry] = useInput("");
  const [description, updateDescription] = useInput("");

  return (
    <PageContainer>
      <FormContainer>
        <h1>INSCREVA-SE AQUI</h1>
        <select>
          <option value='' selected>Escolha aqui a sua viagem</option>
          {/* <option value={Marte} onChange={updatePlanet}>Marte</option>
          <option value={Lua} onChange={updatePlanet}>Lua</option>
          <option value={Venus} onChange={updatePlanet}>Venus</option> */}
        </select>
        <h2>DADOS PESSOAIS</h2>
        <input type='text' placeholder='Seu nome' value={name} onChange={updateName} />
        <input type='number' placeholder='Sua idade' value={age} onChange={updateAge} />
        <input type='text' placeholder='Sua profissão' value={profession} onChange={updateProfession} />
        <select>
          <option value='' selected>País de origem</option>
          {/* <option value={brasil} onChange={updateCountry}>Brasil</option>
          <option value={eua} onChange={updateCountry}>EUA</option>
          <option value={canada} onChange={updateCountry}>Canadá</option> */}
        </select>
        <textarea rows="6" cols="40" placeholder='Porque sou um bom candidato(a)?' value={description} onChange={updateDescription} />
        <button>Enviar</button>
      </FormContainer>
      <ListTripsPage />
    </PageContainer>
  );
}