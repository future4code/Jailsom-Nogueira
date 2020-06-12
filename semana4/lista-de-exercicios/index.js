// Exercícios de interpretação de código:
// 1. Multiplica 100 dólares pela cotação dada pelo usuário e imprime o valor em reais equivalente aos mesmos U$100 
//  nesta cotação informada.
// 2. Multiplica o valor em ações no Switch case e o valor de "Tesouro direto" não será processado por não estar 
//  na condição. Neste caso o valor "Default" será apresentado.
// 3. Tamanho total do array original, tamanho do array1(pares), tamanho array2(impares).
// 4. Dompara todos os numeros menores que infito no array e grava, nesse caso todos, sendo o último 1590. 
//  Depois grava o último maior número, neste caso termina em 1590.

// Exercícios de Lógica de Programação:
// 1. forEach:
// const frutas = [
// 	{nome : 'banana', peso : 0}
// 	{nome : 'laranja', peso : 0}
// ]

// frutas.forEach((cadaFruta, i, a) => {
// 	cadaFruta.peso = 1
// })

// map:
// const frutas = [
// 	{nome : 'banana', peso : 0}
// 	{nome : 'laranja', peso : 0}
// ]

// frutas.forEach((cadaFruta, i, a => {
// 	cadaFrura.peso = 1
// }
// const minhaFeira = frutas.map((cadaFruta, i, a) => {
// 	return fruta.peso
// })

// filter:
// const frutas = [
// 	{nome : 'banana', peso : 0}
// 	{nome : 'laranja', peso : 0}
// ] 
// const minhaFeira = frutas.filter((cadaFruta, i, a) => {
// 	if (fruta.nome === banana){
// 		fruta.peso += 1
// 		return fruta.peso
// })

// 2. 
// const booleano1 = true
// const booleano2 = false
// const booleano3 = !booleano2 //true
// const booleano4 = !booleano3 //false

// a) `booleano1 && booleano2 && !booleano4`
// true && false && true
// false //resposta a
// b) `(booleano1 && booleano2) || !booleano3`
// (true && false)
// false || false
// false //resposta b 
// c)  `(booleano2 || booleano3) && (booleano4 || booleano1)`
// (false || true) && (false || true)
// true && true
// true //resposta c 
// d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)`
// !(false && true) || !(true && true)
// false || false
// false //resposta d 
// e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)`
// !(true) && !(true) || (!false && true && true)
// !(true) && !(true) || (true)
// true //resposta e

// 3. não funciona porque falta o calculo para se saber os pares, e unas cositas mas :D
// const quantidadeDeNumerosPares = 5
// let i = 0
// let numeroPar = 0
// while (i < quantidadeDeNumerosPares) {
//     if (numeroPar % 2 === 0) {
//         i += 1
//         console.log(numeroPar)
//     }
//     numeroPar += 1
// }

// 4.
// let a = 105
// let b = 10
// let c = 1
// console.log(a, b, c)

// triangulo()

// function triangulo() {
//     if ((a === b) && (b === c)) {
//         console.log("Equilátero: todos lados iguais")
//     } else if ((a !== b) && (b !== c) && (c !== a)) {
//         console.log("Escaleno: todos lados diferentes")
//     } else {
//         console.log("Isósceles: 2 lados iguais")
//     }
// }

// 5.
// let a = 4
// let b = 8
// console.log(a, b)

// // i
// if (a > b) {
//     console.log(a + " maior que " + b)
// } else if (a < b) {
//     console.log(a + " menor que " + b)
// } else {
//     console.log(a + " " + b + " são iguais")
// }
// // ii
// if (a % b === 0) {
//     console.log(a + " é divisível por " + b)
// } else {
//     console.log(a + " não é divisível por " + b)
// }
// if (b % a === 0) {
//     console.log(b + " é divisível por " + a)
// } else {
//     console.log(b + " não é divisível por " + a)
// }
// // iii
// if (a >= b) {
//     const c = a - b
//     console.log(a + " é maior" + c)
// } else if (b > a) {
//     const c = b - a
//     console.log(b + " é maior " + c)
// }

// 6.