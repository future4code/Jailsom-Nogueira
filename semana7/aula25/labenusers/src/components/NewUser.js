import React from "react";
import styled from 'styled-components';
import axios from "axios";

const ComponentNewUser = styled.div`
display: flex;
flex-direction: column;
`;

const Header = styled.div`
display:flex;
flex-direction: column;
margin-bottom: 32px;

button{
    width: 200px;
}
`;

const CardInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    border: 1px solid gray;
    width: 30%;
    margin: 0 auto;

    button{
        margin-top: 10px;
    }
`;

class NewUser extends React.Component {
    state = {
        nameValue: '',
        emailValue: ''
      };

    createNewUser = () => {
        const body = {
          name: this.state.nameValue,
          email: this.state.emailValue
        };
    
        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body,
            {
              headers: {
                Authorization: "jailsom-nogueira-turing"
              }
            }
          )
          .then(response => {
            this.setState({ nameValue: "", emailValue: ""});
            alert("Usuário criado com sucesso!")
          })
          .catch(error => {
            // console.log(error.data);
            alert("Algo errado não está certo!")
          });
      };
    
      onChangeNameValue = event => {
        this.setState({ nameValue: event.target.value });
        // console.log(this.state.nameValue)
      };

      onChangeEmailValue = event => {
        this.setState({ emailValue: event.target.value });
      };
    
  render() {
    // console.log(this.state)
    return (
      <ComponentNewUser>
        <Header>
          <h3>Você está na página de registro de usuários.</h3>
            <button onClick={this.props.handleClickPage}>Ir para a pagina de lista</button>
        </Header>

        <CardInputs>
            <label>Nome:</label>
            <input             
            value={this.state.nameValue}
            onChange={this.onChangeNameValue}/>

            <label>Email:</label>
            <input             
            value={this.state.emailValue}
            onChange={this.onChangeEmailValue}/>

            <button onClick={this.createNewUser}>Salvar</button>    
        </CardInputs>
      </ComponentNewUser>
    );
  }
}

export default NewUser;