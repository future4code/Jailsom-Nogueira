import React from 'react';
import './CardPequeno.css'

export default (props) => 
    <>
    <div className="smallcard-container">
        <img src={ props.imagem } />
        <div>
            <h4>{ props.textoEmail }</h4>
            <p>{ props.email }</p>
        </div>

        <div>
            <h4>{ props.textoEndereço }</h4>
            <p>{ props.endereco }</p>
        </div>
    </div>
</>

// function CardPequeno(props) {
//     return (
//         <>
//             <div className="smallcard-container">
//                 <img src={ props.imagem } />
//                 <div>
//                     <h4>{ props.textoEmail }</h4>
//                     <p>{ props.email }</p>
//                 </div>

//                 <div>
//                     <h4>{ props.textoEndereço }</h4>
//                     <p>{ props.endereco }</p>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default CardPequeno;