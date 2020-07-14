import React, { useState } from 'react';
import {CardAppContainer, CardBody} from './style';
import CardHeader from '../CardHeader/CardHeader';
import PossibleMatch from '../PossibleMatch/PossibleMatch';
import CardFooter from '../CardFooter/CardFooter';
import AllMatches from '../AllMatches/AllMatches';

const CardContainer = () => {
  const [changePage, setChangePage] = useState(true)

  const onClickIcon = () => {
    setChangePage(!changePage)
  };

  const CardBodyState = changePage ? (<><PossibleMatch /> <CardFooter /></>) : (<AllMatches />)

  return(
    <CardAppContainer> 
      <CardHeader onClickIcon={onClickIcon}/>
      <CardBody>
        {CardBodyState}
      </CardBody>
    </CardAppContainer>
  )
}

export default CardContainer

