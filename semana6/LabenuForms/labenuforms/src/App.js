import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import styled from "styled-components";

const Home = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const DivBotao = styled.div`
  margin-top: 10px;
`;

class App extends React.Component {
  state = {
    etapa: 1,
  };

  irParaProximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
  }
  
  render() {
    const meuBotao = this.state.etapa < 4 ? 
      <DivBotao>
        <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
      </DivBotao>
        : "";

    const renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 />;
        case 2:
          return <Etapa2 />;  
        case 3:
          return <Etapa3 />;
        case 4:
          return <Final />;
      }
    };

    return (
      <Home>
        {renderizaEtapa()}
        {meuBotao}
      </Home>
    )
  }
}

export default App;