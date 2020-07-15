import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl, user } from '../../constants/Index';
import {CardAppContainer, CardBody} from './style';
import CardHeader from '../CardHeader/CardHeader';
import PossibleMatch from '../PossibleMatch/PossibleMatch';
import CardFooter from '../CardFooter/CardFooter';
import AllMatches from '../AllMatches/AllMatches';

export default function CardContainer () {
  const [changePage, setChangePage] = useState(true)
  const [person, setPerson] = useState([]);
  const [emptyList, setEmptyList] = useState(true)

  useEffect(() => {
    getNewPerson()
  }, []);

  const onClickIconMatches = () => {
    setChangePage(!changePage)
  };

  const onClickAccept = () => {
    const body = {
      "id": `${person.id}`,
      "choice": true
    };
    axios
      .post(
        `${baseUrl}${user}/choose-person`,
        body,
      )
      .then(response => {
        getNewPerson()
      })
      .catch(error => {
        console.log(error.data);
      });
  };

  const getNewPerson = () => {
    axios
    .get(`${baseUrl}${user}/person`)
    .then( response => {
      setPerson(response.data.profile);
    })
    .catch( err => {
      alert(err.message);
    })
  };

  const onClickIconClear = () => {
    axios
    .put(`${baseUrl}${user}/clear`)
    .then( response => {
      alert("Lista de matches esvaziada!");
      setEmptyList(!emptyList)
    })
    .catch( err => {
      alert(err.message);
    })
  };
  
  const CardBodyState = changePage ? (<>
    <PossibleMatch photo={person.photo} name={person.name} age={person.age} bio={person.bio}/> 
    <CardFooter onClickAccept={onClickAccept} getNewPerson={getNewPerson}/></>) : 
    (<AllMatches emptyList={emptyList}/>)

  return(
    <CardAppContainer> 
      <CardHeader onClickIconClear={onClickIconClear} onClickIconMatches={onClickIconMatches}/>
      <CardBody>
        {CardBodyState}
      </CardBody>
    </CardAppContainer>
  )
}


