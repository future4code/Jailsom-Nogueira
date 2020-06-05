console.log("Bem vindo ao jogo de Blackjack!")

if (confirm("Deseja iniciar?")) {
    let sorteio1 = 0 //variável de controle do loop de sorteio, neste caso, compra de 2 cartas, uma por loop
    let sorteio2 = 0 //poderia ter usado a mesma variável, limpando ela a cada termino de sorteios, mas preferi manter assim para facilitar a vizualização
    let pontuacaoComputador = 0
    let pontuacaoUsuario = 0
    let carta1 = 0
    let carta2 = 0

    while (sorteio1 < 2) { //roda o sorteio do usuário 2 vezes para comprar 2 cartas
        const carta = comprarCarta(); //compra uma carta
        sorteio1 += 1 //indica para o loop quantas vezes foi rodado
        pontuacaoUsuario += carta.valor //soma e guarda os valores sorteados
        if (sorteio1 === 1) {
            carta1 = carta.texto //no primeiro loop guarda o valor aqui
        } else {
            carta2 = carta.texto //no segundo loop guarda o valor aqui
        }
    }
    console.log("Usuário - cartas: " + carta1 + " " + carta2 + " - pontuação " + pontuacaoUsuario)

    while (sorteio2 < 2) { //roda o sorteio do computador 2 vezes para comprar 2 cartas
        const carta = comprarCarta();
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

} else { //Cancel clicado
    console.log("O jogo acabou")
}