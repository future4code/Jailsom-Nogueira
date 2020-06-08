// const minhaFuncao = (quantidade) => {
//     const array = []
//     for (let i = 0; i < quantidade; i += 2) {// i = 2
//         for (let j = 0; j < i; j++) { // j = 0
//             array.push(j) // j deveria ser 0
//             // j = j + 1
//         }
//         //   i = i + 2
//     }
//     return array
// }
// let resultado = minhaFuncao(5)
// console.log(resultado)

//1. 
//a. []
//b. [0, 1, 0, 1, 2, 3]
//c. [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

//2.
// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const funcao = (lista, nome) => {
//     for (let i = 0; i < lista.length; i++) {
//         if (lista[i] === nome) {
//             return i;
//         }
//     }
// };

// console.log(funcao(arrayDeNomes, "Darvas"));
// console.log(funcao(arrayDeNomes, "João"));
// console.log(funcao(arrayDeNomes, "Paula"));
//a.busca e compara os nomes na posição do array. quando encontra "Paula" devolve "undefined" pq não o encontrou
//b.funcionaria, pois estaria comparado e buscando números

//3.
// const arrayInicial = [3,2]

// function metodo(array) {
//   let resultadoA = 0;
//   let resultadoB = 1;
//   let arrayFinal = [];

//   for (let x of array) {
//     resultadoA += x;
//     resultadoB *= x;
//   }

//   arrayFinal.push(resultadoA);
//   arrayFinal.push(resultadoB);
//   return arrayFinal;
// }
// console.log(metodo(arrayInicial))

//pega cada valor de x(item do array) e soma na variável resultadoA e multiplica na resultadoB. No arrayFinal 
//inclui estas variáveis. Ao final retorna o novo array 

//4.
// a.
// const anosDeGente = Number(prompt("Qual numero")) //pede a idade anos anos humanos
// let anosDeDog = 0 //inicializa a variável

// function calculaIdadeDog() { //inicio do escopo da função
//     anosDeDog = anosDeGente * 7 //multiplica anos de gente por 7 e atribui a variável com idade de dog
//     return anosDeDog //retorna o resultado da função

// }
// console.log(calculaIdadeDog(anosDeDog)) //chama a função e seu resultado ao console

// b.
// let dados = ""

// function dadosEstudante() {
//     const nome = prompt("Qual nome")
//     let idade = Number(prompt("Qual idade"))
//     const endereco = prompt("Qual endereço")
//     let pergunta = confirm("É estudante?")
//     if (pergunta) {
//         estudante = "SOU"
//     } else {
//         estudante = "NÃO SOU"
//     }
//     dados = ("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e " + estudante +
//         " estudante.")
//     return dados;
// }
//
// console.log(dadosEstudante(dados))

//5.
// let mensagem = ""

// function seculos() {
//     let seculo
//     let ano = Number(prompt("Qual ano entre 1000 e 2020?"))

//     if ((ano >= 1000) && (ano < 1100)) {
//         seculo = "XI"
//     } else if ((ano >= 1100) && (ano < 1200)) {
//         seculo = "XII"
//     } else if ((ano >= 1200) && (ano < 1300)) {
//         seculo = "XIII"
//     } else if ((ano >= 1300) && (ano < 1400)) {
//         seculo = "XIV"
//     } else if ((ano >= 1400) && (ano < 1500)) {
//         seculo = "XV"
//     } else if ((ano >= 1500) && (ano < 1600)) {
//         seculo = "XVI"
//     } else if ((ano >= 1600) && (ano < 1700)) {
//         seculo = "XVII"
//     } else if ((ano >= 1700) && (ano < 1800)) {
//         seculo = "XVIII"
//     } else if ((ano >= 1800) && (ano < 1900)) {
//         seculo = "XIX"
//     } else if ((ano >= 1900) && (ano < 2000)) {
//         seculo = "XX"
//     } else if ((ano >= 2000) && (ano <= 2020)) {
//         seculo = "XXI"
//     }
//     mensagem = String("O ano " + ano + " pertence ao século " + seculo)
//     return mensagem;
// }

// console.log(seculos(mensagem))

//6.
// a.
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// let itens = 0
//     // console.log(itens)

// function quantosItens() {
//     itens = array.length
//     return itens;
// }

// console.log(quantosItens(itens))

//b.
// let numeros = []
// function testeDePares() {
//     const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             numeros.push(true)
//         } else {
//             numeros.push(false)
//         }
//     }
//     return numeros
// }
// console.log(testeDePares(numeros))
//resultado do console: [true, false, false, true, true, true, false, false, true, true]

//c.
// let pares = 0

// function testeDePares() {
//     const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             pares = pares + 1
//         }
//     }
//     return pares
// }
// console.log(testeDePares(pares))

//d.
// acho que fiz isso sem querer na b :D