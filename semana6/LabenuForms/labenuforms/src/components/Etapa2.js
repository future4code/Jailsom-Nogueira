import React from 'react';
import '../App.css';
import styled from "styled-components";

const Etapa2Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

function Etapa2() {
  return (
    <Etapa2Container>
        <h1>ETAPA 2 - INFO DE ENSINO SUPERIOR</h1>

        <p>5. Qual o curso?</p>
        <input></input>

        <p>6. Qual a unidade de ensino?</p>
        <input></input>
    </Etapa2Container>
  );
}

export default Etapa2;
