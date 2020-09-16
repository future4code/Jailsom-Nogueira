"use strict";
function obterEstatisticas(numeros = [1, 2, 3]) {
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    let soma = 0;
    let num = 0;
    for (num of numeros) {
        soma += num;
    }
    const estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatistica;
}
//# sourceMappingURL=ex2.js.map