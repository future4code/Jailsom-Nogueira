//a
// function obterEstatisticas(numeros: number[] = [1, 2, 3]) {

//   const numerosOrdenados = numeros.sort(
//     (a, b) => a - b
//   )

//   let soma = 0

//   for (let num of numeros) {
//     soma += num
//   }

//   const estatisticas = {
//     maior: numerosOrdenados[numeros.length - 1],
//     menor: numerosOrdenados[0],
//     media: soma / numeros.length
//   }

//   return estatisticas
// }

//b
// function obterEstatisticas(numeros: number[] = [1, 2, 3]) {

//   const numerosOrdenados = numeros.sort(
//     (a, b) => a - b
//   )

//   let soma: number = 0
//   let num: number = 0

//   for ( num of numeros ) {
//     soma += num
//   }

//   const estatisticas = {
//     maior: numerosOrdenados[numeros.length - 1],
//     menor: numerosOrdenados[0],
//     media: soma / numeros.length
//   }

//   return estatisticas
// }

//c
function obterEstatisticas(numeros: number[] = [1, 2, 3]) {

  const numerosOrdenados = numeros.sort(
    (a, b) => a - b
  )

  let soma: number = 0
  let num: number = 0

  for ( num of numeros ) {
    soma += num
  }

  type estatisticas = { 
    maior: number, 
    menor: number, 
    media: number
  };

  const estatistica: estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length
  }

  return estatistica
}