import React from "react";
import styled from 'styled-components';
import axios from "axios";

const CriarPlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  width: 30vw;
  margin: 0 auto;
  border: 2px dashed gray;
`;

const axiosConfig = {
    headers: {
        Authorization: "jailsom-nogueira-turing"
    }
  };
  
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const Gap = styled.div`
    height: 4vh;
`;

class CriarPlaylist extends React.Component {
    state = {
        novaPlaylist: ''
    };

    criarNovaPlaylist = () => {
        const body = {
          name: this.state.novaPlaylist
        };
    
        axios
          .post(
            baseUrl,
            body, 
            axiosConfig
          )
          .then(response => {
            this.setState({ novaPlaylist: ""});
            alert("Playlist criada com sucesso!" + this.state.novaPlaylist)
          })
          .catch(err => {
            console.log(err);
            if(err.message === 'Request failed with status code 400'){
                alert('Playlist repetida')
            }else{
                alert(err)
            }     
          });
      };
    
    onChangeNovaPlaylist = event => {
        this.setState({ novaPlaylist: event.target.value });
        // console.log(this.state.novaPlaylist)
    };

    render() {
        return (
        <CriarPlaylistContainer>
            <input             
            value={this.state.novaPlaylist}
            onChange={this.onChangeNovaPlaylist}
            placeholder={"Insira uma nova playlist"}/>
            <Gap />
            <button onClick={this.criarNovaPlaylist}>Enviar</button>   
        </CriarPlaylistContainer>
        );
    }
}
  
  export default CriarPlaylist;

