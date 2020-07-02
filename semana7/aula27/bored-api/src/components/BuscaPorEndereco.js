import React from "react";
import styled from "styled-components";
import axios from "axios";

const BuscaPorEnderecoContainer = styled.div`
  
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 50vw;
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

export class BuscaPorEndereco extends React.Component {
  state = {
    enderecos: [],
    estado: '',
    cidade: '',
    rua: '',
    mostraResultado: false,
  };

  changeEscolhaEstado = event => {
    const novoEstado = event.target.value;
    this.setState({ estado: novoEstado });
  };

  changeEscolhaCidade = event => {
    const novaCidade = event.target.value;
    this.setState({ cidade: novaCidade });
  };

  changeEscolhaRua = event => {
    const novaRua = event.target.value;
    this.setState({ rua: novaRua });
  };

  buscaCep = () => {
    axios
      .get(
        `https://viacep.com.br/ws/${this.state.estado}/${this.state.cidade}/${this.state.rua}/json/`,
      )
      .then(response => {
        this.setState({ enderecos: response.data });
        this.setState({ mostraResultado: true})
      })
      .catch(err => {
        alert(err);
      });
  };
  
  render() {
    return (
      <BuscaPorEnderecoContainer>
        <Gap />
        <Header>
          <input
            placeholder="Estado"
            type="text"
            value={this.state.estado}
            onChange={this.changeEscolhaEstado}
          />
          <input
            placeholder="Cidade"
            type="text"
            value={this.state.cidade}
            onChange={this.changeEscolhaCidade}
          />
          <input
            placeholder="Rua"
            type="text"
            value={this.state.rua}
            onChange={this.changeEscolhaRua}
          />
          <button onClick={this.buscaCep}>Buscar por endereço</button>
        </Header>
        <Gap />
        {this.state.mostraResultado && (
          <ResultadoBusca >
            {this.state.enderecos.map(endereco => {
            return (
              <div>
                <p>
                  {endereco.cep}
                </p>
                <p>
                  {endereco.logradouro}
                </p>
                <hr />
              </div>
            );
          })}
        </ResultadoBusca>
        )}
      </BuscaPorEnderecoContainer>
    );
  }
}

export default BuscaPorEndereco;