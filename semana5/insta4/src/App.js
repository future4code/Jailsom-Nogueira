import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

const NovosPostsInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: gainsboro;
  height: 50px;
  padding: 5px 0;
  margin-bottom: 10px;

  > input{
    outline: 0;
    border: none;
    margin: 0 10px;
    padding: 0 5px;
  }

  > button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  }

  button:hover {
    cursor: pointer;
  }

  button::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 4px solid hsl(236, 32%, 26%);
    transform-origin: center;
    transform: scale(1);
  }

  button:hover::before {
    transition: all 0.75s ease-in-out;
    transform-origin: center;
    transform: scale(1.75);
    opacity: 0;
  }
`;



// EXERCÍCIO AULA 20
class App extends React.Component {
  // Inicializando o estado
  state = {
    // Lista de pessoas colocada no estado
    posts: [
      // O objeto abaixo representa uma pessoa. Ele possui
      // duas propridades: nome e email.
      {
        nomeUsuario:'paulinha',
        fotoUsuario:'https://picsum.photos/50/50?a=1',
        fotoPost:'https://picsum.photos/200/150?a=1'
      },
      {
        nomeUsuario:'jay',
        fotoUsuario:'https://picsum.photos/50/50?a=2',
        fotoPost:'https://picsum.photos/200/150?a=2'
      },
      {
        nomeUsuario:'cris',
        fotoUsuario:'https://picsum.photos/50/50?a=3',
        fotoPost:'https://picsum.photos/200/150?a=3'
      }
    ],
    // Agora precisamos de duas variáveis no estado, guardando
    // os valores dos dois inputs que temos na tela
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "" //Exercício
  };

  adicionaPost = () => {
    // Colocamos em uma variavel o objeto que representa uma nova pessoa
    const novoPost = {
      // Puxamos da variavel de estado "valorInputPessoa" o nome dela
      nomeUsuario: this.state.valorInputNomeUsuario,
      // Puxamos da variavel de estado "valorInputEmail" o email dela
      fotoUsuario: this.state.valorInputFotoUsuario,
      // Exercício
      fotoPost: this.state.valorInputFotoPost
    };

    // Copia array de pessoas e adiciona uma pessoa no final
    const novaListaPosts = [...this.state.posts, novoPost];

    // Define o estado "pessoas" como a variavel "novoPessoas"
    this.setState({ posts: novaListaPosts });
  };

  onChangeInputPessoa = event => {
    // Essa função é chamada toda vez que algo é digitado
    // no input de nome

    // Define o estado "valorInputPessoa" como o
    // valor atual do input, que vem do event
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputEmail = event => {
    // Essa função é chamada toda vez que algo é digitado
    // no input de email

    // Define o estado "valorInputEmail" como o
    // valor atual do input, que vem do event
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputTelefone = event => {
    // Exercício
    this.setState({ valorInputFotoPost: event.target.value });
  };
  
  render() {
        // Da mesma forma que nos exemplos anteriores, pegamos o array de
    // pessoas do estado e mapeamos ele para um componente
    const listaDePosts = this.state.posts.map(essePost => {
      // Porém, cada pessoa não é mais uma string somente, mas sim um objeto
      // com duas propriedades. Por isso, no momento de colocá-la na tela
      // precisamos explicitar qual das propriedades queremos mostrar em
      // cada lugar.
      return (
        <div className={'app-container'}>
          <Post
            nomeUsuario={essePost.nomeUsuario}
            fotoUsuario={essePost.fotoUsuario}
            fotoPost={essePost.fotoPost}
          />
        </div>
      );
    });

    return (
      <div>
        <NovosPostsInputs>
            <input
              // Mesma lógica do exemplo anterior
              value={this.state.valorInputNomeUsuario}
              // Repare na função que é passada aqui no onChange
              onChange={this.onChangeInputPessoa}
              placeholder={"Nome"}
            />
            <input
              // Diferente do input acima, a variável de estado aqui é outra
              value={this.state.valorInputFotoUsuario}
              // E a função também é outra
              onChange={this.onChangeInputEmail}
              placeholder={"Foto do usuário"}
            />
            <input
              // Exercício
              value={this.state.valorInputFotoPost}
              onChange={this.onChangeInputTelefone}
              placeholder={"Foto para o post"}
            />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </NovosPostsInputs>
        <div>{listaDePosts}</div>       
      </div>
    );
  }
}

export default App;

// EXERCÍCIO AULA 19
// class App extends React.Component {
//   render() {
//     return (
//       <div className={'app-container'}>
//         <Post
//           nomeUsuario={'paulinha'}
//           fotoUsuario={'https://picsum.photos/50/50?a=1'}
//           fotoPost={'https://picsum.photos/200/150?a=1'}
//         />
//         <Post
//           nomeUsuario={'jay'}
//           fotoUsuario={'https://picsum.photos/50/50?a=2'}
//           fotoPost={'https://picsum.photos/200/150?a=2'}
//         />
//         <Post
//           nomeUsuario={'cris'}
//           fotoUsuario={'https://picsum.photos/50/50?a=3'}
//           fotoPost={'https://picsum.photos/200/150?a=3'}
//         />           
//       </div>
//     );
//   }
// }

// export default App;