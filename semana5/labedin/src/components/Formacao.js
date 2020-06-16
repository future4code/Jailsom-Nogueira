import React from 'react';
import './Formacao.css'

export default (props) => 
    <>
    <div className="formacao-container">
        <img src={ props.imagem } />
        <div>
            <h4>{ props.nome }</h4>
            <p>{ props.dataTexto } { props.data }</p>
        </div>
    </div>
</>