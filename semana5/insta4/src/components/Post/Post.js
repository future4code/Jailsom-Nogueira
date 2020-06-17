import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
// import {IconeMarcado} from '../IconeComContador/IconeMarcado.js'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeMarcadoVazio from '../../img/marcado-vazio.svg'
import iconeMarcadoCheio from '../../img/marcado-cheio.svg'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    })
    if(!this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      }) 
    } else if ((this.state.curtido) && (this.state.numeroCurtidas > 0)){
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    } 
  }

  onClickMarcado = () => {
    this.setState({
      marcado: !this.state.marcado
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcado
    if(this.state.marcado) {
      iconeMarcado = iconeMarcadoCheio 
    } else {
      iconeMarcado = iconeMarcadoVazio
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return(
        <div className={'post-container'}>
          <div className={'post-header'}>
            <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
            <p>{this.props.nomeUsuario}</p>
          </div>

          <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

          <div className={'post-footer'}>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              valorContador={this.state.numeroCurtidas}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />

            <IconeComContador
              icone={iconeMarcado}
              onClickIcone={this.onClickMarcado}
            />
          </div>
          {componenteComentario}
        </div>
    )
  }
}

export default Post