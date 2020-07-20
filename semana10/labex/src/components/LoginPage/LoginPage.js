import React from 'react';
import { LoginCard } from './styles'

export default function LoginPage () {
  return(
      <LoginCard>
        <h1>LOGIN</h1>
        <input type='text' placeholder='Seu email'></input>
        <input type='text' placeholder='Sua senha'></input>
        <button>Entrar</button>
      </LoginCard>
  )
}