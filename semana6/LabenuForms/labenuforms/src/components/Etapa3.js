import React from 'react';
import '../App.css';
import styled from "styled-components";

const Etapa3Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

function Etapa3() {
  return (
    <Etapa3Container>
        <h1>ETAPA 1 - DADOS GERAIS</h1>

        <p>5. Pq vc não terminou um curso de graduação?</p>
        <input></input>

        <p>6. Vc fez algum curso complementar?</p>
        <select>
        <option value="Nenhum">Nenhum</option>
        <option value="Curso técnico">Curso técnico</option>
        <option value="Curso inglês">Curso inglês</option>
        </select>
    </Etapa3Container>
  );
}

export default Etapa3;
