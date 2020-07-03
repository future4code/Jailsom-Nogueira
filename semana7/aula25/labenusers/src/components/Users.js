import React from "react";
import styled from 'styled-components';
import axios from "axios";
import './Users.css'

const axiosConfig = {
  headers: {
      Authorization: "jailsom-nogueira-turing"
  }
};

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const CardUsers = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    margin: 0 auto;
    padding: 12px;
    border: 1px solid gray;
`;

const CardUsersUl = styled.ul`
  padding-inline-start: 0;
`

const SingleUser = styled.li`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid gray;
    padding: 4px 0px;
    height: 32px; 
    border: border-box; 
`;

const UserClick = styled.p`
`;

class Users extends React.Component {
  state = {
      usersList: [],
    };

  componentDidMount = () => {
      this.getUsersList();
    };
    
  getUsersList = () => {
    axios
      .get(
        baseUrl,
        axiosConfig,
          )
          .then(response => {
            //   console.log(response.data)
              this.setState({ usersList: response.data });
          })
          .catch(error => {
             console.log(error.data);
          });
  };

  deleteUser = (userId) => {
    let r= window.confirm("Tem certeza de que deseja deletar?");
    if (r===true)
      {
        axios.delete(`${baseUrl}/${userId}`, axiosConfig,
        )
        .then(response => {
          //   console.log(response.data)
          alert("Deletado com sucesso!")
          this.getUsersList();
        })
        .catch(error => {
          alert("Algo errado não está certo!")
            console.log(error.data);
        });
      }
    };

  render() {
    return (
      <div>
        <CardUsers>
            <h3>Usuários Cadastrados:</h3>
              <CardUsersUl>
              {this.state.usersList.map(user => {
                return <SingleUser key={user.id}>
                    <UserClick onClick={() => this.props.handleClickPage("UserDetails", user.id)}>{user.name}</UserClick>                   
                    <button onClick={() => this.deleteUser(user.id)}> X</button>
                  </SingleUser>               
              })}
            </CardUsersUl>
        </CardUsers>
      </div>
    );
  }
}

export default Users;