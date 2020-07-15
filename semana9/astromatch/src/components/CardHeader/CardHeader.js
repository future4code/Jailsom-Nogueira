import React from 'react';
import logo from './img/logo-astromatch.png';
import {CardHeaderContainer, CleacrMatchesIcon, AllMatchesIcon} from './style'

export default function CardHeader (props) {
  return(
    <CardHeaderContainer>
      <img src={logo} alt="Logo" />
      <div>
        <CleacrMatchesIcon onClick={props.onClickIconClear}/>
        <AllMatchesIcon onClick={props.onClickIconMatches}/>
      </div>
    </CardHeaderContainer>
  )
}


