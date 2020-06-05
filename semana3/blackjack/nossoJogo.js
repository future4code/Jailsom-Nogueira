/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo de Blackjack!")
if (confirm("Deseja iniciar?")) {
    let sorteio1 = 0
    let sorteio2 = 0
    let pontuacaoComputador = 0
    let pontuacaoUsuario = 0
    let carta1 = 0
    let carta2 = 0

    while (sorteio1 < 2) {
        const carta = comprarCarta();
        //   console.log(carta.texto)
        //   console.log(carta.valor)
        sorteio1 += 1
        pontuacaoUsuario += carta.valor
        if (sorteio1 === 1) {
            carta1 = carta.texto
        } else {
            carta2 = carta.texto
        }

    }
    console.log("Usuário - cartas: " + carta1 + " " + carta2 + " - pontuação " + pontuacaoUsuario)

    while (sorteio2 < 2) {
        const carta = comprarCarta();
        //   console.log(carta.texto)
        //   console.log(carta.valor)
        sorteio2 += 1
        pontuacaoComputador += carta.valor
        if (sorteio2 === 1) {
            carta1 = carta.texto
        } else {
            carta2 = carta.texto
        }

    }
    console.log("Computador - cartas: " + carta1 + " " + carta2 + " - pontuação " + pontuacaoComputador)
    if (pontuacaoComputador === pontuacaoUsuario) {
        console.log("Empate!")
    } else if (pontuacaoComputador < pontuacaoUsuario) {
        console.log("O usuário ganhou!")
    } else {
        console.log("O computador ganhou!")
    }

} else { //"Cancel clicado"
    console.log("O jogo acabou")
}