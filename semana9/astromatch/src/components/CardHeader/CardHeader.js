import React from 'react';
import logo from './img/logo-astromatch.png';
import {CardHeaderContainer, AllMatchIcon} from './style'

const CardHeader = (props) => {
  return(
    <CardHeaderContainer>
      <img src={logo} alt="Logo" />
      <AllMatchIcon onClick={props.onClickIcon}/>
    </CardHeaderContainer>
  )
}

export default CardHeader
