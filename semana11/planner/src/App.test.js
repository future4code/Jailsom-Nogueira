import React from 'react';
import {
  render,
  fireEvent,
  wait
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import axios from 'axios'

axios.get = jest.fn().mockResolvedValue({
  data: []
})

axios.post = jest.fn().mockResolvedValue()

axios.put = jest.fn().mockResolvedValue()

describe('Renderizacao inicial', () => {
  test('Input existe na tela', async () => {
    const {
      getByPlaceholderText
    } = render( <App /> )

    const input = getByPlaceholderText('Nova tarefa')

    await wait(() => expect(input).toBeInTheDocument())
  })

  test('Botao existe na tela', async () => {
    const {
      getByText
    } = render( <App /> )

    await wait(() => expect(getByText(/SALVAR/)).toBeInTheDocument())
  })
})

describe('Criar uma tarefa', () => {
  test('quando o usuario digita, o texto tem que aparecer', async () => {
    const {
      getByPlaceholderText
    } = render( <App /> )

    const input = getByPlaceholderText('Nova tarefa')

    await wait(() => {
      fireEvent.change(input, {
        target: {
          value: 'tarefa teste'
        }
      })
    });

    expect(input).toHaveValue('tarefa teste')
  })
})

describe('Lista de tarefas', () => {
  test('Testa renderização inicial', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [{
        id: '1',
        day: 'segunda',
        text: 'bananinha'
      }]
    })
    
    const {getByPlaceholderText, getByText, findByText} = render(<App/>)

    const input = getByPlaceholderText('Nova tarefa')
    expect(input).toBeInTheDocument()

    const button = getByText(/SALVAR/)
    expect(button).toBeInTheDocument()

    const tarefaBananinha = await findByText(/bananinha/)
    expect(tarefaBananinha).toBeInTheDocument()

    expect(axios.get).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-jailsom/')
  })

  test('Testa criação de tarefas', async () => {
    axios.post = jest.fn().mockResolvedValue()
    axios.get = jest.fn().mockResolvedValue({
      data: []
    })

    const {getByPlaceholderText, getByText, getByLabelText } = render(<App/>)

    const input = getByPlaceholderText('Nova tarefa')
    expect(input).toBeInTheDocument()

    const button = getByText(/SALVAR/)
    expect(button).toBeInTheDocument()
    
    await wait(() => {
      userEvent.type(input, 'bananinha')
    });

    const filterSelect = getByLabelText('Dia');

    await wait(() => {
      userEvent.selectOptions(filterSelect, 'segunda');
      userEvent.click(button)
    });
   
    expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-jailsom/', {
      day: 'segunda',
      text: 'bananinha'
    })

    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
    })
  })
  
})

