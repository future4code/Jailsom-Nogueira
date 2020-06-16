import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno.js';
import Formacao from './components/Formacao.js';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Jailsom" 
          descricao="Oi, eu sou o Jailsom. Sou aluno da Labenu. Adoro responder e-mails do meu chefe na sexta-feira e responder imediatamente só para receber uma bronca e mais trabalho em cima da hora."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

    {/* email e endereço */}
      <div className="page-section-container">
        <CardPequeno 
          imagem="https://www.pinpng.com/pngs/m/300-3002424_e-mail-icon-mw-white-envelope-icon-png.png?a=1" 
          textoEmail="Email:"
          email="jailsom@gmail.com"
        />
        <CardPequeno 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTh3TrzKbnScPGqG3Oji3loEtlOT0JxbThGpFTH4C2Mb6jd0CpZ&usqp=CAU?a=2"
          textoEndereço="Endereço:" 
          endereco="Avenida Oceânica, 1440"
        />
      </div>
    {/* /email e endereço */}

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Labenu" 
          descricao="Estudando para entrar no mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://www.pngkit.com/png/detail/41-413073_5422c3418a632d4241caa626-home-icon-home-icons-for-website-png.png" 
          nome="Casa" 
          descricao="Lavador de louças." 
        />
      </div>

      {/* DESAFIO */}
      <div className="page-section-container">
        <h2>Formação acadêmica</h2>
        <Formacao 
          imagem="https://www.faesa.br/wp-content/uploads/2018/01/cropped-logo_faesa_perfil.png" 
          nome="FAESA"
          descricao="Lorem ipsum dolor sit amet"
          dataTexto="Data:" 
          data="2012 - 2013" 
        />
        
        <Formacao 
          imagem="data:image/png;base64,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" 
          nome="Labenu" 
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing eliore et dolore magna aliqua. Ut enim ad minim veniam,"
          dataTexto="Data:" 
          data="Cursando"
        />

        <Formacao 
          imagem="https://www.go.senac.br/portal/images/logo211x124.jpg" 
          nome="SENAC"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," 
          dataTexto="Data:" 
          data="2011"
        />
        
      </div>
      {/* /DESAFIO */}

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
