import React from "react";
import styled from "styled-components";
import axios from "axios";
import BuscaPorCep from "./components/BuscaPorCep";
import BuscaPorEndereco from "./components/BuscaPorEndereco";

const Container = styled.div`
  font-family: sans-serif;
  color: #796e6e;
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
  /* Firefox */
  input[type=number] {
  -moz-appearance: textfield;
}
  input{
    outline: none;
  }

  button {
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    padding: 0.4em 1em;
    outline: none;
    border: none;
    background-color: hsl(236, 32%, 26%);
    overflow: hidden;
    cursor: pointer;
  }

  button::after {
    content: '';
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
  }

  button:hover::after {
    transition: transform 0.45s ease-in-out;
    transform: translate3d(200%, 0, 0) rotate(35deg);
  }
`;

const Gap = styled.div`
  height: 32px;
`;

export class App extends React.Component {
  state = {
    cep: '',
    endereco: '',
    telaAtual: 'BuscaPorCep'
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

  trocaTela = () => {
    if (this.state.telaAtual === "BuscaPorCep") {
      this.setState({ telaAtual: "BuscaPorEndereco" });
    } else {
      this.setState({ telaAtual: "BuscaPorCep" });
    }
  };

  render() {
    return (
      <Container>
          <Gap />
          <button onClick={this.trocaTela}>Trocar de tela</button>
          <div>
           {this.state.telaAtual === "BuscaPorCep" ? <BuscaPorCep /> : <BuscaPorEndereco />}
          </div>
      </Container>
    );
  }
}

export default App;