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

// Exercícios de Funções
// 1.
// const array = [25, 1, 55, 64, 121, 44, 11, 84, 51, 120, 48, 2, 66]

// let minhaFuncao = () => {
//     let i = 0
//     let segundoMaior = array[0]
//     let segundoMenor = array[0]
//     let maior = array[0]
//     let menor = array[0]

//     while (i < array.length) { //aqui descubro o maior
//         if (array[i] > maior) {
//             maior = array[i]
//         }
//         i++
//     }
//     i = 0
//     while (i < array.length) { //aqui o segundo maior
//         if ((array[i] > segundoMaior) && (segundoMaior < maior) && (array[i] !== maior)) {
//             segundoMaior = array[i]
//         }
//         i++
//     }
//     i = 0

//     while (i < array.length) { //aqui o menor
//         if (array[i] < menor) {
//             menor = array[i]
//         }
//         i++
//     }
//     i = 0
//     while (i < array.length) { //aqui o segundo menor
//         if ((array[i] < segundoMenor) && (segundoMenor > menor) && (array[i] !== menor)) {
//             segundoMenor = array[i]
//         }
//         i++
//     }
//     return console.log(segundoMaior, segundoMenor)
// }

// const resultado = minhaFuncao(array)

// 2.
// let helloWorld = () => {
//     return alert("Hello Future4")
// }
// const resultado = helloWorld()

// Exercícios de Objetos
// 1.
// Arrays são usados para guardar vários itens/valores em uma mesma variável.
// Ojbetos são um aglomerado de propriedades associados a um item através de uma chave.

// 2.
// let criaRetangulo = (lado1, lado2) => {
//     const retangulo = {
//         largura: lado1,
//         altura: lado2,
//         perímetro: 2 * (lado1 + lado2),
//         area: lado1 * lado2
//     }
//     return console.log(retangulo);
// }
// const resultado = criaRetangulo(2, 3)