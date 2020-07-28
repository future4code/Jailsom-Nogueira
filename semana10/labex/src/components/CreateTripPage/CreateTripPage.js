import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {CreateTripPageContainer, FormContainer} from './styles';

import ListTripsComponentAdmin from '../ListTripsComponent/ListTripsComponentAdmin';
import Planets from '../PlanetsListComponent/PlanetsListComponent';
import useForm from '../../hooks/useForm';

import axios from 'axios';
import { baseUrl, user, axiosConfig} from '../../constants/axios';

export default function CreateTripPage() {
  const token = window.localStorage.getItem('token');
  const history = useHistory();

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [history, token]);

  const { form, onChange } = useForm({
    trip: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: '',
  });

  const createTrip = () => {
    const body = {
      'name': `${form.trip}`,
      'planet': `${form.planet}`,
      'date': `${form.date}`,
      'description': `${form.description}`,
      'durationInDays': `${form.durationInDays}`,
    };
    axios
    .post(`${baseUrl}${user}/trips`, 
      body, 
      axiosConfig
    )
    .then( response => {
      alert('Viagem criada!');
    })
    .catch( err => {
      console.log(err.message);
    })
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSave = event => {
    event.preventDefault();
    createTrip();
  };

  return (
    <CreateTripPageContainer>
      <FormContainer>
        <h1>NOVA VIAGEM</h1>
        <form onSubmit={handleSave}>
          <input
            value={form.name}
            type='text'  
            name='trip' 
            placeholder='Nome da viagem' 
            title='O nome deve ter no mínimo 3 letras' 
            required
            onChange={handleInputChange}
          />
          <select 
            value={form.planet} 
            onChange={handleInputChange}
            name='planet'
            required
          >
            <Planets />
          </select>
          <input 
            value={form.date}               
            type='data'
            name='date'
            placeholder='DD/MM/AAAA'
            required 
            onChange={handleInputChange} 
          />
          <input 
            value={form.durationInDays}               
            type='number'
            name='durationInDays'
            min='50'
            placeholder='Duração'
            required 
            onChange={handleInputChange} 
          />
          <textarea
            value={form.description}  
            rows='6' 
            cols='40'
            type='text'
            name='description' 
            placeholder='Descrição da viagem'
            pattern={'[A-Za-z]{30,}'}
            required  
            onChange={handleInputChange} 
          />
          <button>Criar</button>
        </form>
      </FormContainer>
      <ListTripsComponentAdmin />
    </CreateTripPageContainer>
  );
}