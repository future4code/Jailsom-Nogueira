import fs from 'fs'

//Exercício 1
// const fileData: string = fs.readFileSync('./meus-dados.json').toString()
// let users: any = JSON.parse(fileData)

// const idade: number = Number(users.idade + 7)

// console.log("Olá, " + users.nome + "! Você tem " + users.idade + " anos. Em sete anos você terá " + (idade))

//Exercício 2
// const fileData: string = fs.readFileSync('./numeros-somar.json').toString()
// let numeros: any = JSON.parse(fileData)

// console.log("A soma de " + numeros.num1 + " e " + numeros.num2 + " é " + Number(numeros.num1 + numeros.num2))

// LER A BASE DE DADOS

// RECEBER PARÂMETROS DO TERMINAL
const num1: number = Number(process.argv[1])
const num2: number = Number(process.argv[2])

console.log(num1 + num2)