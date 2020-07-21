import React from "react";
import { useHistory } from "react-router-dom";
import { AppBar } from './styles'

export default function Header () {
  const history = useHistory();
  const goToHomePage = () => {
    history.push("/");
  };
  const goToLoginPage = () => {
    history.push("/LoginPage");
  };
  return(
    <AppBar>
      <button onClick={goToHomePage}>HOME</button>
      <button onClick={goToLoginPage}>LOGIN</button>
    </AppBar>
  );
}