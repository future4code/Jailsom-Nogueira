import React from 'react';
import '../App.css';

function PerguntaOpcoes() {
    return (
        <>
          <p>1. Qual a sua escolaridade?</p>
          <select>
            <option value="medio-incompleto">Ensino médio incompleto</option>
            <option value="medio-completo">Ensino médio completo</option>
            <option value="superior-incompleto">Ensino superior incompleto</option>
            <option value="superior-completo">Ensino superior completo</option>
          </select>
        </>
    );
  }
  
  export default PerguntaOpcoes;