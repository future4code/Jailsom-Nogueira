import React from "react";
import styled from "styled-components";
import axios from "axios";

const BuscaPorCepContainer = styled.div`
  
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 30vw;
  padding: 8px;
  margin: 0 auto;
  background-color: lightslategray;
`;

const Gap = styled.div`
  height: 32px;
`;

const ResultadoBusca = styled.div`
  border: 2px solid lightgrey;
  width: 30vw;
  padding: 8px;
  margin: 0 auto;
`;

export class BuscaPorCep extends React.Component {
  state = {
    cep: '',
    endereco: '',
    tela: ''
  };

  changeEscolhaCep = event => {
    const novoCep = event.target.value;
    this.setState({ cep: novoCep });
  };

  buscaEndereco = () => {
    axios
      .get(
        `https://viacep.com.br/ws/${this.state.cep}/json/`,
      )
      .then(response => {
        this.setState({ endereco: response.data });
        this.setState({cep: ''})//limpa o input
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {
    return (
      <BuscaPorCepContainer>
          <Gap />
          <Header>
            <input
              placeholder="CEP"
              type="number"
              value={this.state.cep}
              onChange={this.changeEscolhaCep}
            />
            <button onClick={this.buscaEndereco}>Buscar por CEP</button>
          </Header>
          <Gap />
          {this.state.endereco && (
            <ResultadoBusca>
            <p><strong>CEP: </strong>{this.state.endereco.cep}</p>
            <p><strong>Logradouro: </strong>{this.state.endereco.logradouro}</p>
            <p><strong>Bairro: </strong>{this.state.endereco.bairro}</p>
            <p><strong>Localidade: </strong>{this.state.endereco.localidade}</p>
            <p><strong>UF: </strong>{this.state.endereco.uf}</p>
          </ResultadoBusca>
          )}
      </BuscaPorCepContainer>
    );
  }
}

export default BuscaPorCep;