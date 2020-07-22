import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { LoginCard } from './styles'
import axios from 'axios';
import { baseUrl, user} from '../../constants/axios';

export default function LoginPage () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const body = {
      email: email,
      password: password
    };
    axios
      .post(`${baseUrl}${user}/login`, body)
      .then(response => {
        window.localStorage.setItem('token', response.data.token);
        history.push('/admin/create-trip');
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return(
    <LoginCard>
      <h1>LOGIN</h1>
      <input type='text' placeholder='Seu email' value={email} onChange={onChangeEmail} />
      <input type='text' placeholder='Sua senha' value={password} onChange={onChangePassword} />
      <button onClick={handleLogin}>Entrar</button>
    </LoginCard>
  )
}