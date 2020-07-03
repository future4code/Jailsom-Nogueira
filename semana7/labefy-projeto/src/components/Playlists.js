import React from 'react';
import styled from 'styled-components';
import axios from "axios";

const axiosConfig = {
    headers: {
        Authorization: "jailsom-nogueira-turing"
    }
  };
  
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const PlaylistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  width: 30vw;
  margin: 0 auto;
  border: 2px dashed gray;
`;

const CadaPlaylist = styled.li`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid gray;
    padding: 4px 0px;
    height: 32px; 
    border: border-box; 
`;

class Playlists extends React.Component {
    state = {
        playlists: [],
      };
  
    componentDidMount = () => {
        this.getPlaylists();
      };
      
    getPlaylists = () => {
      axios
        .get(
          baseUrl,
          axiosConfig,
            )
            .then(response => {
                // console.log(response.data)
                this.setState({ playlists: response.data.result.list });
            })
            .catch(err => {
               console.log('getPlaylists' + err.data);
            });
    };

    apagarPlaylist = (a,b) => {
        let r= window.confirm('Tem certeza de que deseja apagar a playlist ' + b + '?') ;
        if (r===true)
          {
            axios.delete(`${baseUrl}/${a}`, axiosConfig,
            )
            .then(response => {
              //   console.log(response.data)
              alert("Apagada com sucesso!")
              this.getPlaylists();
            })
            .catch(err => {
              alert("Algo errado não está certo!")
                console.log('apagarPlaylist' + err.data);
            });
          }
        };

    render() {
      return (
        <PlaylistsContainer>
                <h3>Todas as playlists:</h3>
                {this.state.playlists.map(playlist => {
                return <CadaPlaylist key={playlist.id}>
                    <p onClick={() => this.props.mudaPagina("PlaylistDetalhada", playlist.id, playlist.name)}>{playlist.name}</p>
                    <button onClick={() => this.apagarPlaylist(playlist.id, playlist.name)}>X</button>
                </CadaPlaylist>               
                })}
        </PlaylistsContainer>
      );
    }
  }
  
  export default Playlists;