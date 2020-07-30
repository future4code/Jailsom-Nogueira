import React from "react";
import {
  render,
  fireEvent
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe('Renderizacao inicial', () => {
  test('Input existe na tela', () => {
    const {
      getByPlaceholderText
    } = render( <App /> )

    const input = getByPlaceholderText('Nova tarefa')

    expect(input).toBeInTheDocument()
  })

  test('Botao existe na tela', () => {
    const {
      getByText
    } = render( <App /> )

    expect(getByText(/SALVAR/)).toBeInTheDocument()
  })
})

describe('Criar uma tarefa', () => {
  test('quando o usuario digita, o texto tem que aparecer', () => {
    const {
      getByPlaceholderText
    } = render( <App /> )

    const input = getByPlaceholderText('Nova tarefa')

    fireEvent.change(input, {
      target: {
        value: 'tarefa teste'
      }
    })

    expect(input).toHaveValue('tarefa teste')
  })

  // test('quando o usuario digita e clica em criar tarefa, o input deve ser limpo', () => {
  //   // Renderiza o App, e desestrutura o retorno pegando as funções "getByPlaceholderText" e "getByText"
  //   const {
  //     getByPlaceholderText,
  //     getByText
  //   } = render(<App />)

  //   // Encontra o input pelo texto do placeholder
  //   const input = getByPlaceholderText('Nova tarefa')

  //   // Dispara um evento de "change" para o input. Passa o valor "tarefa teste" para entrar no input
  //   fireEvent.change(input, {
  //     target: {
  //       value: 'tarefa teste'
  //     }
  //   })

  //   // Encontra o botão pelo texto "Adicionar". Aqui, usa regex para isso
  //   const button = getByText(/SALVAR/)

  //   // Clica no botão
  //   fireEvent.click(button)

  //   // Verifica se o input possui o "value" vazio
  //   expect(input).toHaveValue('')
  // })
})

// describe('Marcar tarefa como completa', () => {
//   test('Quando clicar na tarefa, ela deve ser riscada', () => {
//     // Renderiza o App, cria uma tarefa, e desestrutura o retorno pegando as funções "getByTestId"
//     const {getByTestId} = criaTarefa()

//     // Encontra um item de tarefa
//     const tarefa = getByTestId('item-tarefa')

//     // Clica no item
//     fireEvent.click(tarefa)

//     // Verifica se está riscado
//     expect(tarefa).toHaveStyle('text-decoration: line-through')
//   })

//   test('Quando clicar na tarefa, ela deve ser riscada', () => {
//     // Renderiza o App, cria uma tarefa, e desestrutura o retorno pegando as funções "getByTestId"
//     const {getByTestId} = criaTarefa()

//     // Encontra um item de tarefa
//     const tarefa = getByTestId('item-tarefa')

//     // Clica no item 2 vezes
//     fireEvent.click(tarefa)
//     fireEvent.click(tarefa)

//     // Verifica se não está riscado
//     expect(tarefa).toHaveStyle('text-decoration: none')
//   })
// })
