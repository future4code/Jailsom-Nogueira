import React from "react";
import styled from 'styled-components';
import axios from "axios";

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

    button {
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
        };

  render() {
    return (
      <div>
        <h3>Você está na página de lista de usuários.</h3>
        <button onClick={this.props.handleClickPage}>Ir para a registro</button>
        <CardUsers>
            <h3>Usuários Cadastrados:</h3>
            {this.state.usersList.map(user => {
                return <ul>
                    <SingleUser>
                        {user.name}                   
                        <button onClick={() => this.deleteUser(user.id)}> X</button>
                    </SingleUser>
                </ul>
            })}
        </CardUsers>
      </div>
    );
  }
}

export default Users;