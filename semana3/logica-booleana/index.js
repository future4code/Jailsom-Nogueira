/*
Exercício 1 de leitura"
a - false
b - false
c - true
d - false
e - boolean
*/

/*
Exercício 2 de leitura"
a. array = []
b. 0
c. array.length
d. 
 I.  undefined
 II.  null
 III.  11
 IV.  3  e  4
 V.  19  e  9
 VI.  3
 VII.  1
*/

//1 - 
console.log("Exercício 1 de programação:")
let valorK = 0
let valorF = 0
let valorC = 0

// a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
valorK = (77 - 32) * 5 / 9 + 273.15
console.log("a- 77°F = " + valorK + "K")
valorK = 0

//b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
valorF = (80) * 9 / 5 + 32
console.log("b- 80°C = " + valorF + "°F")
valorF = 0

//c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
valorF = (30) * 9 / 5 + 32
valorK = (valorF - 32) * 5 / 9 + 273.15
console.log("c- " + valorF + "°F " + valorK + "K")
valorF = 0
valorK = 0

//d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.

valorC = prompt("Insira o valor em Celsius")
valorF = (30) * 9 / 5 + 32
valorK = (valorF - 32) * 5 / 9 + 273.15
console.log("d- " + valorC + "°C " + valorF + "°F " + valorK + "K")


//2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo nesta parte). Imprima-as com as respostas no console da seguinte forma:

console.log("Exercício 2 de programação:")

endereco = ""
corF = ""
idade = 0
altura = 0
esporte = ""

endereco = prompt("1. Qual o seu endereço?")
corF = prompt("2. Qual a sua cor favorita?")
idade = prompt("3. Qual a sua idade?")
altura = prompt("4. Qual a sua altura?")
esporte = prompt("5. Pratica algum esporte?")

console.log("1. Qual o seu endereço?" + "\n" + "Resposta: " + endereco)
console.log("2. Qual a sua cor favorita?" + "\n" + "Resposta: " + corF)
console.log("3. Qual a sua idade?" + "\n" + "Resposta: " + idade)
console.log("4. Qual a sua altura?" + "\n" + "Resposta: " + altura)
console.log("5. Pratica algum esporte?" + "\n" + "Resposta: " + esporte)


console.log("Exercício 3 de programação:")
quilowattH = 0.05
valor = 280 * quilowattH
console.log("a- Por 280Qh, o valor a ser pago é: R$" + valor)

porCento = prompt("insira o valor do desconto")
quilowattH = 0.05
valor = 280 * quilowattH
desconto = (porCento / 100) * valor
pagar = valor - desconto
console.log("b- Por 280Qh, o valor a ser pago é: R$" + valor + "\n" + "com o desconto de " + porCento + "% restariam R$" + pagar)

//DESAFIO
console.log("Desafio:")

libras = prompt("Insira o valor em libras")
kilos = libras / 2.2046
console.log("a- " + libras + "lb equivalem a " + kilos + "kg")
kilos = 0
libras = 0

kilos = 10 / 35.274
console.log("b- 10.5oz equivalem a " + kilos + "kg")
kilos = 0

metros = 100 * 1609
console.log("c- 100mi equivalem a " + metros + "m")
metros = 0

metros = 50 / 3.281
console.log("d- 50ft equivalem a " + metros + "m")
metros = 0

litros = 103.56 * 3.79
console.log("e- 103.56gal equivalem a " + litros + "l")
litros = 0

litros = (450 * 6) / 25
console.log("f- 450xic equivalem a " + litros + "l")
litros = 0

console.log("g- resposta no item 'a' acima")