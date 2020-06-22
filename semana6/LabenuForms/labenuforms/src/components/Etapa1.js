import React from 'react';
import '../App.css';
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

const Etapa1Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

function Etapa1() {
  return (
    <Etapa1Container>
      <PerguntaAberta />
      <PerguntaOpcoes />
    </Etapa1Container> 
  );
}

export default Etapa1;
