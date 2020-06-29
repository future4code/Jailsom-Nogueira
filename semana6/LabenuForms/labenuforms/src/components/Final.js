import React from 'react';
import '../App.css';
import styled from "styled-components";

const FinalContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

function Final() {
  return (
    <FinalContainer>
        <h1>O FORMULÁRIO ACABOU!</h1>
        <h3>Obrigado por participar. Entraremos em contato.</h3>
    </FinalContainer>
  );
}

export default Final;
