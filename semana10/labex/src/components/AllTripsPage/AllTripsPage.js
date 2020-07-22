import React from 'react';
import {AllTripsContainer} from './styles';
import ListTripsComponent from '../ListTripsComponent/ListTripsComponent'

export default function AllTripsPage() {
  return (
    <AllTripsContainer>
      <h1>TODAS AS VIAGENS</h1>
      <ListTripsComponent />
    </AllTripsContainer>
  );
}