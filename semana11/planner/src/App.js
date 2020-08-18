import React, { useState, useEffect } from 'react';
import {
  MyTheme, 
  AppBar, 
  ContentContainer,
  TasksContainer, 
  DayContainer 
  } from './appStyles/styles'
import axios from 'axios';
import { baseUrl } from './components/constants/axios';
import useForm from './components/hooks/useForm';

export default function App() {
  const [myTasks, setMyTasks] = useState([]);

  const { form, onChange } = useForm({
    text:'',
    day:'',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSave = event => {
    event.preventDefault();
    createTask();
  };

  const createTask = () => {
    const body = {
      'text': `${form.text}`,
      'day': `${form.day}`,
    };

    axios
    .post(`${baseUrl}`, body)
    .then( response => {
      
      alert('Tarefa criada!');
      getTrips()
    })
    .catch( err => {
      console.log(err.message);
    })
  };

  useEffect(() => {
    getTrips()
  },[]);

  const getTrips = () => {
    axios
    .get(`${baseUrl}`)
    .then( response => {
      setMyTasks(response.data);
    })

    .catch( err => {
      console.log(err.message);
    })
  }

  return (
    <MyTheme>
      <AppBar>
        <ContentContainer onSubmit={handleSave}>
          <label htmlFor={'task'}>Tarefa</label>
          <input
            value={form.text}
            type='text'  
            name='text'
            id={'task'} 
            placeholder='Nova tarefa'
            pattern={'[A-Za-z ]{3,30}'} 
            title='A tarefa deve ter no mínimo 10 letras e máximo 30' 
            required
            onChange={handleInputChange}
          />
          <label htmlFor={'day'}>Dia</label>
          <select            
            value={form.day} 
            name={'day'}
            id={'day'}
            required
            onChange={handleInputChange}
            >
            <option value=''>Escolha o dia</option>
            <option value='segunda'>Segunda-Feira</option>
            <option value='terca'>Terça-Feira</option>
            <option value='quarta'>Quarta-Feira</option>
            <option value='quinta'>Quinta-Feira</option>
            <option value='sexta'>Sexta-Feira</option>
            <option value='sabado'>Sábado</option>
            <option value='domingo'>Domingo</option>
          </select>
          <button>SALVAR</button>
        </ContentContainer>
      </AppBar>
      <TasksContainer>
        <DayContainer>
          <h3>Segunda</h3>
          {myTasks.map(task => {
            if(task.day === 'segunda'){           
              return(
                <p key={task.id}><b>Tarefa:</b> {task.text}</p>
              )
            }
          })}
        </DayContainer>
        <DayContainer>
          <h3>Terça</h3>
          {myTasks.map(task => {
            if(task.day === 'terca'){
              return(
                <p key={task.id}><b>Tarefa:</b> {task.text}</p>
              )
            }
          })}
        </DayContainer>
        <DayContainer>
          <h3>Quarta</h3>
          {myTasks.map(task => {
            if(task.day === 'quarta'){
              return(
                <p key={task.id}><b>Tarefa:</b> {task.text}</p>
              )
            }
          })}
        </DayContainer>
        <DayContainer>
          <h3>Quinta</h3>
          {myTasks.map(task => {
            if(task.day === 'quinta'){
              return(
                <p key={task.id}><b>Tarefa:</b> {task.text}</p>
              )
            }
          })}
        </DayContainer>
        <DayContainer>
          <h3>Sexta</h3>
          {myTasks.map(task => {
            if(task.day === 'sexta'){
              return(
                <p key={task.id}><b>Tarefa:</b> {task.text}</p>
              )
            }
          })}
        </DayContainer>
        <DayContainer>
          <h3>Sábado</h3>
          {myTasks.map(task => {
            if(task.day === 'sabado'){
              return(
                <p key={task.id}><b>Tarefa:</b> {task.text}</p>
              )
            }
          })}
        </DayContainer>
        <DayContainer>
          <h3>Domingo</h3>
          {myTasks.map(task => {
            if(task.day === 'domingo'){
              return(
                <p key={task.id}><b>Tarefa:</b> {task.text}</p>
              )
            }
          })}
        </DayContainer>
      </TasksContainer>
    </MyTheme>
  );
}

