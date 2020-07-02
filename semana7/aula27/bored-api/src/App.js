import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  font-family: sans-serif;
`;

const ResultadoBusca = styled.div`
  border: 2px solid lightgrey;
  width: 30vw;
  padding: 8px;
  margin: 0 auto;
`;

export class App extends React.Component {
  state = {
    cep: '',
    endereco: ''
  };

  changeEscolhaCep = event => {
    const novoCep = event.target.value;
    this.setState({ cep: novoCep });
  };

  buscaEndereco = () => {
    axios
      .get(
        `https://viacep.com.br/ws/${this.state.cep}/json/`,
        // console.log(`viacep.com.br/ws/${this.state.cep}/json/`)
      )
      .then(response => {
        this.setState({ endereco: response.data });
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {
    return (
      <Container>
          <input
            placeholder="CEP"
            type="number"
            value={this.state.cep}
            onChange={this.changeEscolhaCep}
          />
          <button onClick={this.buscaEndereco}>Buscar por CEP</button>
          <ResultadoBusca>
            <p><strong>CEP: </strong>{this.state.endereco.cep}</p>
            <p><strong>Logradouro: </strong>{this.state.endereco.logradouro}</p>
            <p><strong>Bairro: </strong>{this.state.endereco.bairro}</p>
            <p><strong>Localidade: </strong>{this.state.endereco.localidade}</p>
            <p><strong>UF: </strong>{this.state.endereco.uf}</p>
          </ResultadoBusca>
      </Container>
    );
  }
}

export default App;