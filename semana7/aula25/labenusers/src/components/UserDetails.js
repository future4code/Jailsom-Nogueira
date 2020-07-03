import React from "react";
import styled from 'styled-components';
import axios from "axios";

const axiosConfig = {
    headers: {
        Authorization: "jailsom-nogueira-turing"
    }
  };
  
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const CardUserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  border: 1px solid gray;
  width: 30%;
  margin: 0 auto;
`;

const Details = styled.p`
    
`;

class UserDetails extends React.Component {
state = {
    userDetail: {},
    name: "",
    email: ""
    };

    componentDidMount() {
    this.getUserDetail();
    }

    getUserDetail = () => {
    axios
        .get(`${baseUrl}/${this.props.userId}`, axiosConfig)
        .then(response => {
        this.setState({ userDetail: response.data });
        })
        .catch(err => {
        console.log(err);
        });
    };

  render() {
    return (
        <CardUserDetails>
            <h3>Dados do usuário:</h3>
            <Details>Usuário: {this.state.userDetail.name}</Details>
            <Details>Email: {this.state.userDetail.email}</Details>
        </CardUserDetails>    
    );
  }
}

export default UserDetails;