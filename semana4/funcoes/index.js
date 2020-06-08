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
// console.log(dadosEstudante(dados))