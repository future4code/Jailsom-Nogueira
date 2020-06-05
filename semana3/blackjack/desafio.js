// DESAFIO. parte 8
// console.log("Bem vindo ao jogo de Blackjack!")

// if (confirm("Deseja iniciar?")) {
//     let sorteio1 = 0 //variável de controle do loop de sorteio, neste caso, compra de 2 cartas, uma por loop
//     let sorteio2 = 0
//     let pontuacaoComputador = 0
//     let pontuacaoUsuario = 0
//     let carta1 = 0
//     let carta2 = 0
//     let jogo = true
//     let ases1 = false
//     let ases2 = false

//     while (jogo) { //se 1 dos jogadores tirar 2 "A"s tudo roda novamente(ou se for true)
//         while (sorteio1 < 2) { //roda o sorteio do usuário 2 vezes para comprar 2 cartas
//             const carta = comprarCarta(); //compra uma carta
//             sorteio1 += 1 //indica para o loop quantas vezes foi rodado
//             pontuacaoUsuario += carta.valor //soma e guarda os valores sorteados
//             if (sorteio1 === 1) {
//                 carta1 = carta.texto //no primeiro loop guarda a carta aqui
//             } else {
//                 carta2 = carta.texto //no segundo loop guarda a carta aqui
//             }
//             if ((carta1 === 11) && (carta2 === 11)) { //identifica sempre que ambas as cartas forem "A" ou seja "11"
//                 ases1 = true // se iguais, vira true
//             }
//         }
//         console.log("Usuário - cartas: " + carta1 + " " + carta2 + " - pontuação " + pontuacaoUsuario)

//         while (sorteio2 < 2) { //roda o sorteio do computador 2 vezes para comprar 2 cartas
//             const carta = comprarCarta();
//             sorteio2 += 1
//             pontuacaoComputador += carta.valor
//             if (sorteio2 === 1) {
//                 carta1 = carta.texto
//             } else {
//                 carta2 = carta.texto
//             }
//             if ((carta1 === 11) && (carta2 === 11)) { //identifica sempre que ambas as cartas forem "A" ou seja "11"
//                 ases2 = true
//             }
//         }
//         if ((ases1) || (ases2)) {
//             jogo = true //as cartas são dadas novamente
//         } else {
//             jogo = false //o jogo não é jogado novamente e temos os resultados
//             console.log("Computador - cartas: " + carta1 + " " + carta2 + " - pontuação " + pontuacaoComputador)

//             if (pontuacaoComputador === pontuacaoUsuario) {
//                 console.log("Empate!")
//             } else if (pontuacaoComputador < pontuacaoUsuario) {
//                 console.log("O usuário ganhou!")
//             } else {
//                 console.log("O computador ganhou!")
//             }
//         }
//     }
// } else { //Cancel clicado
//     console.log("O jogo acabou")
// }

// DESAFIO. parte 9
// console.log("Bem vindo ao jogo de Blackjack!")

// if (confirm("Deseja iniciar?")) {
//     let sorteio1 = 0 //variável de controle do loop de sorteio, neste caso, compra de 2 cartas, uma por loop
//     let sorteio2 = 0
//     let pontuacaoUsuario = 0
//     let pontuacaoComputador = 0
//     let carta1User = 0
//     let carta2User = 0
//     let cartasUser = []
//     let carta1Comp = 0
//     let carta2Comp = 0
//     let cartasComp = []
//     let jogo = true
//     let ases1 = false
//     let ases2 = false
//     novaCartaUser = false

//     while (jogo) { //se 1 dos jogadores tirar 2 "A"s tudo roda novamente(ou se for true)

//         //USUÁRIO
//         while ((sorteio1 < 2) || (novaCartaUser)) { //roda o sorteio do usuário 2 vezes para comprar 2 cartas
//             const carta = comprarCarta(); //compra uma carta
//             pontuacaoUsuario += carta.valor //soma e guarda os valores sorteados
//             if (sorteio1 === 0) {
//                 carta1User = carta.texto //no primeiro loop guarda a carta aqui
//             } else if (sorteio1 === 1) {
//                 carta2User = carta.texto //no segundo loop guarda a carta aqui
//             }
//             if ((carta1User === 11) && (carta2User === 11)) { //identifica sempre que ambas as cartas forem "A" ou seja "11"
//                 ases1 = true // se iguais, vira true
//             }
//             cartasUser.push(carta.texto) //Guarda todas as cartas em um array
//             sorteio1 += 1 //indica para o loop quantas vezes foi rodado
//             novaCartaUser = false
//         }

//         //COMPUTADOR
//         while (sorteio2 < 2) { //roda o sorteio do computador 2 vezes para comprar 2 cartas
//             const carta = comprarCarta();
//             pontuacaoComputador += carta.valor
//             if (sorteio2 === 0) {
//                 carta1Comp = carta.texto
//             } else if (sorteio2 === 1){
//                 carta2Comp = carta.texto
//             }
//             if ((carta1Comp === 11) && (carta2Comp === 11)) { //identifica sempre que ambas as cartas forem "A" ou seja "11"
//                 ases2 = true
//             }
//             cartasComp.push(carta.texto)
//             sorteio2 += 1
//         }

//         if ((ases1) || (ases2)) {
//             jogo = true //as cartas são dadas novamente
//         } else if (confirm(
//                 "Suas cartas são " + cartasUser + ". A carta revelada do computador é " + carta1Comp +
//                 "\n" + // \n faz pular a linha
//                 "Deseja comprar mais uma carta?")) {
//             jogo = true //caso o usuário peça mais cartas
//             novaCartaUser = true //uma nova carta para o usuário 
//         } else {
//             jogo = false
//             console.log("Usuário - cartas: " + cartasUser + ".Pontuação: " + pontuacaoUsuario)
//             console.log("Computador - cartas: " + cartasComp + ".Pontuação: " + pontuacaoComputador)
//             if (pontuacaoComputador === pontuacaoUsuario) {
//                 console.log("Empate!")
//             } else if (pontuacaoComputador < pontuacaoUsuario) {
//                 console.log("O usuário ganhou!")
//             } else {
//                 console.log("O computador ganhou!")
//             }
//         }
//     }
// } else { //Cancel clicado
//     console.log("O jogo acabou")
// }

// DESAFIO. parte 10
// console.log("Bem vindo ao jogo de Blackjack!")

// if (confirm("Deseja iniciar?")) {
//     let sorteio1 = 0 //variável de controle do loop de sorteio, neste caso, compra de 2 cartas, uma por loop
//     let sorteio2 = 0
//     let pontuacaoUsuario = 0
//     let pontuacaoComputador = 0
//     let carta1User = 0
//     let carta2User = 0
//     let cartasUser = []
//     let carta1Comp = 0
//     let carta2Comp = 0
//     let cartasComp = []
//     let jogo = true
//     let ases1 = false
//     let ases2 = false
//     novaCartaUser = false

//     while (jogo) { //se 1 dos jogadores tirar 2 "A"s tudo roda novamente(ou se for true)

//         //USUÁRIO
//         while ((sorteio1 < 2) || (novaCartaUser)) { //roda o sorteio do usuário 2 vezes para comprar 2 cartas
//             const carta = comprarCarta(); //compra uma carta
//             pontuacaoUsuario += carta.valor //soma e guarda os valores sorteados
//             if (sorteio1 === 0) {
//                 carta1User = carta.texto //no primeiro loop guarda a carta aqui
//             } else if (sorteio1 === 1) {
//                 carta2User = carta.texto //no segundo loop guarda a carta aqui
//             }
//             if ((carta1User === 11) && (carta2User === 11)) { //identifica sempre que ambas as cartas forem "A" ou seja "11"
//                 ases1 = true // se iguais, vira true
//             }
//             cartasUser.push(carta.texto) //Guarda todas as cartas em um array
//             sorteio1 += 1 //indica para o loop quantas vezes foi rodado
//             novaCartaUser = false
//         }

//         //COMPUTADOR
//         while (sorteio2 < 2) { //roda o sorteio do computador 2 vezes para comprar 2 cartas
//             const carta = comprarCarta();
//             pontuacaoComputador += carta.valor
//             if (sorteio2 === 0) {
//                 carta1Comp = carta.texto
//             } else if (sorteio2 === 1) {
//                 carta2Comp = carta.texto
//             }
//             if ((carta1Comp === 11) && (carta2Comp === 11)) { //identifica sempre que ambas as cartas forem "A" ou seja "11"
//                 ases2 = true
//             }
//             cartasComp.push(carta.texto)
//             sorteio2 += 1
//         }

//         if ((ases1) || (ases2)) {
//             jogo = true //as cartas são dadas novamente
//         } else if (pontuacaoUsuario < 21) {
//             if (confirm(
//                     "Suas cartas são " + cartasUser + ". A carta revelada do computador é " + carta1Comp +
//                     "\n" + // \n faz pular a linha
//                     "Deseja comprar mais uma carta?")) {
//                 jogo = true //caso o usuário peça mais cartas
//                 novaCartaUser = true //uma nova carta para o usuário 
//             } else { jogo = false }
//         }
//         if ((jogo === false) || (pontuacaoUsuario >= 21)) { //quando o usuário atinge 21 ou não quer mais cartas
//             jogo = false
//             console.log("Usuário - cartas: " + cartasUser + ".Pontuação: " + pontuacaoUsuario)
//             console.log("Computador - cartas: " + cartasComp + ".Pontuação: " + pontuacaoComputador)
//             if (pontuacaoComputador === pontuacaoUsuario) {
//                 alert("Empate!")
//             } else if (pontuacaoComputador < pontuacaoUsuario) {
//                 alert("Suas cartas foram " + cartasUser + ". Pontuação: " + pontuacaoUsuario +
//                     "\n" +
//                     "As cartas do computador foram " + cartasComp + ". Pontuação: " + pontuacaoComputador +
//                     "\n" +
//                     "Você ganhou!"
//                 )
//             } else {
//                 alert("Suas cartas foram " + cartasUser + ". Pontuação: " + pontuacaoUsuario +
//                     "\n" +
//                     "As cartas do computador foram " + cartasComp + ". Pontuação: " + pontuacaoComputador +
//                     "\n" +
//                     "O computador ganhou!")
//             }
//         }
//     }
// } else { //Cancel clicado
//     console.log("O jogo acabou")
// }

//DESAFIO. parte 11
// console.log("Bem vindo ao jogo de Blackjack!")

// if (confirm("Deseja iniciar?")) {
//     let sorteio1 = 0 //variável de controle do loop de sorteio, neste caso, compra de 2 cartas, uma por loop
//     let sorteio2 = 0
//     let pontuacaoUsuario = 0
//     let pontuacaoComputador = 0
//     let carta1User = 0
//     let carta2User = 0
//     let cartasUser = []
//     let carta1Comp = 0
//     let carta2Comp = 0
//     let cartasComp = []
//     let jogo = true
//     let ases1 = false
//     let ases2 = false
//     novaCartaUser = false
//     novaCartaComp = false

//     while (jogo) { //se 1 dos jogadores tirar 2 "A"s tudo roda novamente(ou se for true)

//         //USUÁRIO
//         while ((sorteio1 < 2) || (novaCartaUser)) { //roda o sorteio do usuário 2 vezes para comprar 2 cartas
//             const carta = comprarCarta(); //compra uma carta
//             pontuacaoUsuario += carta.valor //soma e guarda os valores sorteados
//             if (sorteio1 === 0) {
//                 carta1User = carta.texto //no primeiro loop guarda a carta aqui
//             } else if (sorteio1 === 1) {
//                 carta2User = carta.texto //no segundo loop guarda a carta aqui
//             }
//             if ((carta1User === 11) && (carta2User === 11)) { //identifica sempre que ambas as cartas forem "A" ou seja "11"
//                 ases1 = true // se iguais, vira true
//             }
//             cartasUser.push(carta.texto) //Guarda todas as cartas em um array
//             sorteio1 += 1 //indica para o loop quantas vezes foi rodado
//             novaCartaUser = false
//         }

//         //COMPUTADOR
//         while ((sorteio2 < 2) || (novaCartaComp)) { //roda o sorteio do computador 2 vezes para comprar 2 cartas
//             const carta = comprarCarta();
//             pontuacaoComputador += carta.valor
//             if (sorteio2 === 0) {
//                 carta1Comp = carta.texto
//             } else if (sorteio2 === 1) {
//                 carta2Comp = carta.texto
//             }
//             if ((carta1Comp === 11) && (carta2Comp === 11)) { //identifica sempre que ambas as cartas forem "A" ou seja "11"
//                 ases2 = true
//             }
//             cartasComp.push(carta.texto)
//             sorteio2 += 1
//             novaCartaComp = false
//         }

//         if ((ases1) || (ases2)) {
//             jogo = true //as cartas são dadas novamente
//         } else if (pontuacaoUsuario < 21) {
//             if (confirm(
//                     "Suas cartas são " + cartasUser + ". A carta revelada do computador é " + carta1Comp +
//                     "\n" + // \n faz pular a linha
//                     "Deseja comprar mais uma carta?")) {
//                 jogo = true //caso o usuário peça mais cartas
//                 novaCartaUser = true //uma nova carta para o usuário 
//             } else { jogo = false }
//         } else if (pontuacaoComputador < pontuacaoUsuario) {
//             jogo = true
//             novaCartaComp = true
//         } else { jogo = false }

//         if (jogo === false) { //quando o usuário atinge 21 ou não quer mais cartas
//             jogo = false
//             console.log("Usuário - cartas: " + cartasUser + ".Pontuação: " + pontuacaoUsuario)
//             console.log("Computador - cartas: " + cartasComp + ".Pontuação: " + pontuacaoComputador)
//             if (pontuacaoComputador === pontuacaoUsuario) {
//                 alert("Empate!")
//             } else if (pontuacaoComputador < pontuacaoUsuario) {
//                 alert("Suas cartas foram " + cartasUser + ". Pontuação: " + pontuacaoUsuario +
//                     "\n" +
//                     "As cartas do computador foram " + cartasComp + ". Pontuação: " + pontuacaoComputador +
//                     "\n" +
//                     "Você ganhou!"
//                 )
//             } else {
//                 alert("Suas cartas foram " + cartasUser + ". Pontuação: " + pontuacaoUsuario +
//                     "\n" +
//                     "As cartas do computador foram " + cartasComp + ". Pontuação: " + pontuacaoComputador +
//                     "\n" +
//                     "O computador ganhou!")
//             }
//         }
//     }
// } else { //Cancel clicado
//     console.log("O jogo acabou")
// }

//DESAFIO. parte 12 INCOMPLETO!!!
// console.log("Bem vindo ao jogo de Blackjack!")

// if (confirm("Deseja iniciar?")) {
//     let sorteio1 = 0 //variável de controle do loop de sorteio, neste caso, compra de 2 cartas, uma por loop
//     let sorteio2 = 0
//     let pontuacaoUsuario = 0
//     let pontuacaoComputador = 0
//     let carta1User = 0
//     let carta2User = 0
//     let cartasUser = []
//     let carta1Comp = 0
//     let carta2Comp = 0
//     let cartasComp = []
//     let jogo = true
//     let ases1 = false
//     let ases2 = false
//     novaCartaUser = false
//     novaCartaComp = false

//     while (jogo) { //se 1 dos jogadores tirar 2 "A"s tudo roda novamente(ou se for true)

//         //USUÁRIO
//         while ((sorteio1 < 2) || (novaCartaUser)) { //roda o sorteio do usuário 2 vezes para comprar 2 cartas
//             const carta = comprarCarta(); //compra uma carta
//             pontuacaoUsuario += carta.valor //soma e guarda os valores sorteados
//             if (sorteio1 === 0) {
//                 carta1User = carta.texto //no primeiro loop guarda a carta aqui
//             } else if (sorteio1 === 1) {
//                 carta2User = carta.texto //no segundo loop guarda a carta aqui
//             }
//             if ((carta1User === 11) && (carta2User === 11)) { //identifica sempre que ambas as cartas forem "A" ou seja "11"
//                 ases1 = true // se iguais, vira true
//             }
//             cartasUser.push(carta.texto) //Guarda todas as cartas em um array
//             sorteio1 += 1 //indica para o loop quantas vezes foi rodado
//             novaCartaUser = false
//         }

//         //COMPUTADOR
//         while ((sorteio2 < 2) || (novaCartaComp)) { //roda o sorteio do computador 2 vezes para comprar 2 cartas
//             const carta = comprarCarta();
//             pontuacaoComputador += carta.valor
//             if (sorteio2 === 0) {
//                 carta1Comp = carta.texto
//             } else if (sorteio2 === 1) {
//                 carta2Comp = carta.texto
//             }
//             if ((carta1Comp === 11) && (carta2Comp === 11)) { //identifica sempre que ambas as cartas forem "A" ou seja "11"
//                 ases2 = true
//             }
//             cartasComp.push(carta.texto)
//             sorteio2 += 1
//             novaCartaComp = false
//         }

//         if ((ases1) || (ases2)) {
//             jogo = true //as cartas são dadas novamente
//         } else if (pontuacaoUsuario < 21) {
//             if (confirm(
//                     "Suas cartas são " + cartasUser + ". A carta revelada do computador é " + carta1Comp +
//                     "\n" + // \n faz pular a linha
//                     "Deseja comprar mais uma carta?")) {
//                 jogo = true //caso o usuário peça mais cartas
//                 novaCartaUser = true //uma nova carta para o usuário 
//             } else { jogo = false }
//         } else if (pontuacaoComputador < pontuacaoUsuario) {
//             jogo = true
//             novaCartaComp = true
//         } else { jogo = false }

//         if (jogo === false) { //quando o usuário atinge 21 ou não quer mais cartas
//             jogo = false
//             console.log("Usuário - cartas: " + cartasUser + ".Pontuação: " + pontuacaoUsuario)
//             console.log("Computador - cartas: " + cartasComp + ".Pontuação: " + pontuacaoComputador)
//             if (pontuacaoUsuario > 21) {
//                 alert("Suas cartas foram " + cartasUser + ". Pontuação: " + pontuacaoUsuario +
//                     "\n" +
//                     "As cartas do computador foram " + cartasComp + ". Pontuação: " + pontuacaoComputador +
//                     "\n" +
//                     "O computador ganhou!"
//                 )
//             } else if ((pontuacaoComputador > 21) && (pontuacaoUsuario <= 21)) {
//                 alert("Suas cartas foram " + cartasUser + ". Pontuação: " + pontuacaoUsuario +
//                     "\n" +
//                     "As cartas do computador foram " + cartasComp + ". Pontuação: " + pontuacaoComputador +
//                     "\n" +
//                     "Você ganhou")
//             } else if ((pontuacaoComputador < pontuacaoUsuario) && (pontuacaoUsuario <= 21)) {
//                 alert("Suas cartas foram " + cartasUser + ". Pontuação: " + pontuacaoUsuario +
//                     "\n" +
//                     "As cartas do computador foram " + cartasComp + ". Pontuação: " + pontuacaoComputador +
//                     "\n" +
//                     "Você ganhou")
//             } else {
//                 alert("Suas cartas foram " + cartasUser + ". Pontuação: " + pontuacaoUsuario +
//                     "\n" +
//                     "As cartas do computador foram " + cartasComp + ". Pontuação: " + pontuacaoComputador +
//                     "\n" +
//                     "O computador ganhou!"
//                 )
//             }
//         }
//     }
// } else { //Cancel clicado
//     console.log("O jogo acabou")
// }