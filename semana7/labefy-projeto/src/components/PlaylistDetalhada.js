import React from 'react';
import styled from 'styled-components';
import axios from "axios";

const axiosConfig = {
    headers: {
        Authorization: "jailsom-nogueira-turing"
    }
  };

const PlaylistDetalhesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  width: 30vw;
  margin: 0 auto;
  border: 2px dashed gray;
`;

const Gap = styled.div`
    height: 4vh;
`;

class PlaylistDetalhada extends React.Component {
    state = {
        playlist: [],
        playlistId: '',
        playlistNome: '',

        nomeMusica: '',
        nomeArtista: '',
        urlMusica: '',

        tocando: false
      };
  
    componentDidMount = () => {
        this.getPlaylistPorNome();
      };
      
      getPlaylistPorNome = () => {
      axios
        .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,
             axiosConfig,
            )
            .then(response => {
                // console.log(response.data)
                this.setState({ playlistId: this.props.playlistId})
                this.setState({ playlist: response.data.result.tracks });
                this.setState({ playlistNome: this.props.playlistNome})
            })
            .catch(err => {
               console.log(err.data);
            });
    };

    onChangeNomeMusica = event => {
        this.setState({ nomeMusica: event.target.value });
        // console.log(this.state.novaPlaylist)
    };

    onChangeNomeArtista = event => {
        this.setState({ nomeArtista: event.target.value });
        // console.log(this.state.novaPlaylist)
    };

    onChangeUrlMusica = event => {
        this.setState({ urlMusica: event.target.value });
        // console.log(this.state.novaPlaylist)
    };

    adicionarUmaNovaMusica = () => {
        const body = {
          name: this.state.nomeMusica,
          artist: this.state.nomeArtista,
          url: this.state.urlMusica,
        };

        axios
          .post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,
            body, 
            axiosConfig
          )
          .then(response => {
            this.setState({ nomeMusica: ""});
            this.setState({ nomeArtista: ""});
            this.setState({ urlMusica: ""});
            this.getPlaylistPorNome();
            alert("Música adicionada com sucesso!")
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

    playNaMusica = (a,b) => {
        let musica = new Audio(a);
        if(b === "Play"){
            musica.play()
            this.setState({tocando: !this.state.tocando})
        }else{
            musica.pause()
            this.setState({tocando: !this.state.tocando})
        }
        // b === "Pause" ? musica.play() : musica.pause();
        console.log(b)    
    };

   render() {
        console.log(this.state.nomeMusica)
        console.log(this.state.nomeArtista)
        console.log(this.state.urlMusica)
      return (
        <PlaylistDetalhesContainer>
            <h1>Playlist: {this.state.playlistNome}</h1>
            <ul>
                {this.state.playlist.map(track => {
                return <li key={track.id}>
                    <p>{track.name}</p>
                    <button onClick={() => this.playNaMusica(track.url , "Play")}>Play</button>
                    <button onClick={() => this.playNaMusica(track.url , "Pause")}>Pause</button>
                </li>               
                })}
            </ul>
            <h3>Adicionar música:</h3>
            <input             
                value={this.state.nomeMusica}
                onChange={this.onChangeNomeMusica}
                placeholder={"Nome da música"}/>
            <Gap />
            <input             
                value={this.state.nomeArtista}
                onChange={this.onChangeNomeArtista}
                placeholder={"Artista ou Banda"}/>
            <Gap />
            <input             
                value={this.state.urlMusica}
                onChange={this.onChangeUrlMusica}
                placeholder={"Link da música"}/>
            <Gap />

            <button onClick={this.adicionarUmaNovaMusica}>Enviar</button> 
        </PlaylistDetalhesContainer>
      );
    }
  }
  export default PlaylistDetalhada;