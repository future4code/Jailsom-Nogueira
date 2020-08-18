import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("Ao clicar em Adicionar, deve aparecer botão curtir", () => {
  // preparação
  const { getByText } = render(<App />);

  const botaoAdicionar = getByText(/Adicionar/i);

  // execução
  fireEvent.click(botaoAdicionar);

  // verificação
  let textoBotao = getByText(/Curtir/i);

  expect(textoBotao).toHaveTextContent("Curtir");
});

test("Ao clicar em Adicionar, deve aparecer botão Apagar", () => {
  // preparação
  const { getByText } = render(<App />);

  const botaoAdicionar = getByText(/Adicionar/i);

  // execução
  fireEvent.click(botaoAdicionar);

  // verificação
  let textoBotao = getByText(/Apagar/i);

  expect(textoBotao).toHaveTextContent("Apagar");
});

test("Ao clicar em Curtir, deve aparecer botão Descurtir", () => {
  // preparação
  const { getByText } = render(<App />);
  const botaoAdicionar = getByText(/Adicionar/i);
  fireEvent.click(botaoAdicionar);

  const botaoCurtir = getByText(/Curtir/i);

  // execução
  fireEvent.click(botaoCurtir);

  // verificação
  let textoBotao = getByText(/Descurtir/i);

  expect(textoBotao).toHaveTextContent("Descurtir");
});

test("Ao enviar o post deve limpar o input", () => {
  // preparação
  const { getByText } = render(<App />);

  const botaoAdicionar = getByText(/Adicionar/i);
  fireEvent.click(botaoAdicionar);

  const input = getByText(/Novo post/i);

  expect(input).toHaveTextContent("Novo post");
});