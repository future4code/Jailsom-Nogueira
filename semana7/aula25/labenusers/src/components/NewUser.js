import React from "react";
import styled from 'styled-components';
import axios from "axios";

const axiosConfig = {
  headers: {
      Authorization: "jailsom-nogueira-turing"
  }
};

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const ComponentNewUser = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  border: 1px solid gray;
  width: 20%;
  margin: 0 auto;

  input{
    margin-bottom: 12px;
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
        baseUrl,
        body, 
        axiosConfig
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
        <CardInputs>
            <input             
            value={this.state.nameValue}
            onChange={this.onChangeNameValue}
            placeholder={"Nome"}/>

            <input             
            value={this.state.emailValue}
            onChange={this.onChangeEmailValue}
            placeholder={"Email"}/>

            <button onClick={this.createNewUser}>Salvar</button>    
        </CardInputs>
      </ComponentNewUser>
    );
  }
}

export default NewUser;