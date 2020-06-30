import React from "react";
import styled from 'styled-components';
import axios from "axios";
import './Users.css'

const CardUsers = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    margin: 0 auto;
`;

const SingleUser = styled.li`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid gray;
    padding: 4px 20px;
    height: 32px; 
    border: border-box; 
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
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
              headers: {
                Authorization: "jailsom-nogueira-turing"
              }
            }
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
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
            {
                headers: {
                  Authorization: "jailsom-nogueira-turing"
                }
            }
            )
            .then(response => {
              //   console.log(response.data)
              this.getUsersList();
            })
            .catch(error => {
               console.log(error.data);
            });
          }
        };

  render() {
    return (
      <div>
        <h3>Você está na página de lista de usuários.</h3>
        <button onClick={this.props.handleClickPage}>Ir para a registro</button>
        <CardUsers>
            <h3>Usuários Cadastrados:</h3>
              <ul>
              {this.state.usersList.map(user => {
                return <SingleUser key={user.id}>
                    {user.name}                   
                    <button onClick={() => this.deleteUser(user.id)}> X</button>
                  </SingleUser>               
              })}
            </ul>
        </CardUsers>
      </div>
    );
  }
}

export default Users;