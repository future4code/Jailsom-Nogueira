/*
EXERCÍCIO 1
A cada repetição do loop, "sum" receberá o valor do indice somado ao seu próprio valor. 
Parando no momento em que o indice chegar na posição 14 ou seja, menor que 15.  
*/

/*
EXERCÍCIO 2
a.
O comando push adiciona um novo indice a lista.
b.
Múltiplos de 5, log = 10 15 25 30
c.
Múltiplos de 3, log = 12 15 18 21 27 30
Múltiplos de 4, log = 12  
*/

/*
EXERCÍCIO 3
a.
*/
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maior = array[0] //Atribuo o primeiro valor do array para ter uma referência
// let menor = array[0] //Precisa só para o menor, mas já aproveitei para inicar a variável "maior" tb

// for (let numero of array) {
//     if (numero > maior) {
//         maior = numero
//     } else if (numero < menor) {
//         menor = numero
//     }
// }
// console.log("O maior número é " + maior + " e o menor é " + menor)

/*
b.
*/
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novoArray = [] 
// for (let numero of array) {
//     let divisao = numero / 10 //Divide os valores de cada item e atribui
//     novoArray.push(divisao) //Adiciona o valor da divisão a um novo item do novo array
// }
// console.log(novoArray)

/*
c.
*/
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novoArray = []
// for (let numero of array) {
//     if (numero % 2 === 0) { //se o resto da divisão for 0, faça:
//         novoArray.push(numero) //Adiciona o valor a um novo item do novo array(neste caso apenas os pares)
//     }
// }
// console.log(novoArray)

/*
d.
*/
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let i = 0

// for (let numero of array) {
//     console.log("O elemento do índex " + i + " é " + numero)
//     i += 1 //i = i + 1
// }

/*
DESAFIO 1
0
00
000
0000
*/
/*
DESAFIO 2
*/

// const numero = prompt("Escolha um número:") //número a ser adivinhado
// console.log("Vamos jogar!")
// let chute = prompt("Dê seu chute!") //primeiro chute
// let tentativas = 1 //declara e add a primeira tentativa

// if (numero === chute) { //Caso acerte de primeira só executa o primeiro if
//     console.log("Acertou de primeira!")
//     console.log("O número de tentativas foi : " + tentativas)
// } else {
//     while (numero !== chute) { //enquanto não acertar, entra no loop
//         if (chute < numero) { //caso o chute for menor do que o número
//             console.log("Errrrrrrrou, o chute foi menor")
//             console.log("O número chutado foi: " + chute)
//         } else { //se não é maior, pq o igual já foi tratado na condição inicial 
//             console.log("Errrrrrrrou, o chute foi maior")
//             console.log("O número chutado foi: " + chute)
//         }
//         chute = prompt("Dê seu chute!") //abre para um novo chute
//         tentativas += 1 //add uma tentativa
//     }
//     console.log("Acertou!") //quando acerta, sai do loop e apresenta esta
//     console.log("O número de tentativas foi : " + tentativas)
// }