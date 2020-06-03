/*
Exercício 1.
pede um numero ao usuário e guarda na variável respostaDoUsuario;
transforma este respostaDoUsuario em uma variável tipo número chamada numero;
compara se o resto da divisão de respostaDoUsuario por 2 será 0;
Se sim, "Passou no teste."
Se o resultado não for 0, ou seja, o número não é diretamente divisível por 2, é passada a msg: 
"Não passou no teste." Ex.: 7/2=3 com resto da divisão 1
*/
/*
Exercício 2.
a. Apresentar o valor da fruta escolhida pelo usuário;
b. O preço da fruta Maçã é R$2.25
c. R$24,55
d. O preço da fruta  Pêra  é  R$  5
o código continua rodando e antes do break mais próximo o resultado da variável foi trocado para 5
*/
/*
Exercício 3.
Não haverá msg, a variável "mensagem" está declarada dentro do bloco if e sendo 
invocada no escopo geral.
Soluções: colocar o console log dentro do bloco if ou declarar a variável "mensagem"
no escopo geral, junto das demais.
*/

// Exercício4.
// a. 
// const primeiraResposta = prompt("Digite o primeiro número") //recebe o primeiro numero
// const primeiroNumero = Number(primeiraResposta) //transforma em número
// const segundaResposta = prompt("Digite o segundo número") //recebe o segundo numero
// const segundoNumero = Number(segundaResposta) //transforma em número
// let menor = 0 //declara variável
// let maior = 0 //declara variável

// if (primeiroNumero !== segundoNumero) { //só entra na condição se os números são diferentes
//     if ((primeiroNumero < segundoNumero) && (primeiroNumero !== segundoNumero)) { //se o primeiro número for menor e eles forem diferentes
//         menor = primeiroNumero // atribui "primeiroNumero" à variável "menor"
//         maior = segundoNumero // atribui "segundoNumero" à variável "maior"
//         console.log(maior + "," + menor) // imprime no log
//     } else { //se forem diferentes, e "primeiroNumero" for maior
//         menor = segundoNumero // atribui "segundoNumero" à variável "menor"
//         maior = primeiroNumero // atribui "primeiroNumero" à variável "maior"
//         console.log(maior + "," + menor) // imprime no log
//     }
// } else {
//     console.log("Os números são iguais!") // caso os números sejam iguais
// }