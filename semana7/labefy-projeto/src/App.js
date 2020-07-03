import React from 'react';
import styled from 'styled-components';
import CriarPlaylist from "./components/CriarPlaylist";
import Playlists from "./components/Playlists";
import PlaylistDetalhada from "./components/PlaylistDetalhada";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
`;

const AppHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10%;
  margin: 0 auto;
  margin-bottom: 32px;
`;

class App extends React.Component {
  state = {
    pagina: "CriarPlaylist",
    playlistId: '',
    playlistNome: ''
  };

  mudaPagina = (a,b,c) => {
    this.setState({ playlistId: b });
    this.setState({ playlistNome: c });
    if(a ===  "PlaylistDetalhada"){
        this.setState({ pagina: "PlaylistDetalhada"});
    }else {
      const click = this.state.pagina;
      switch (click) {
      case 'Playlists' :
        this.setState({ pagina: "CriarPlaylist"});
        break;
      case 'PlaylistDetalhada' :
        this.setState({ pagina: "CriarPlaylist"});
        break;  
      default:
        this.setState({ pagina: "Playlists" });
    }
  }
  };

  render() {
    // console.log(this.state.playlistNome)
    let renderiza = "";
    switch (this.state.pagina) {
    case 'Playlists':
      renderiza =
          <Playlists mudaPagina={this.mudaPagina} />
      break;
    case 'PlaylistDetalhada':
      renderiza = 
        <PlaylistDetalhada mudaPagina={this.mudaPagina} playlistId={this.state.playlistId} playlistNome={this.state.playlistNome}/>
      break;
    default: 
    renderiza =
        <CriarPlaylist mudaPagina={this.mudaPagina}/>
  }
    return (
      <AppContainer>
        <AppHeader>
          <button onClick={this.mudaPagina}>{this.state.pagina === 'CriarPlaylist' ? 'Playlists' : 'Criar playlist'}</button>
        </AppHeader>
        {renderiza}
      </AppContainer>
    );
  }
}

export default App;

