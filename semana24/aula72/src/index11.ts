// // Considere que a gente só possa fazer três operações com string: adicionar um caractere a ele, remover um caractere dele ou substituir um caractere por outro. Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma string é  'one edit' de outra.
// interface HashCountCharacters {
//   [index: string]: number
// }

// const checkString = (inputA: string, inputB: string): boolean => {
//   if ( inputA.length > inputB.length + 1) { //adição de 2 caracteres ou mais
//     return false
//   } else if ( inputA.length < inputB.length - 1 ) { //redução de 2 caracteres ou mais
//     return false
//   } else if ( inputA === inputB ) { //São iguais
//     return false
//   } else if ( !inputA || !inputB ) { //Um dos campos é inválido
//     return false
//   }
//   return true
// }

// console.log('1', checkString("banan", "banana")); // true
// console.log('2', checkString("bananak", "banana")); // true
// console.log('3', checkString("panana", "banana")); // true
// console.log('4', checkString("bananaa", "banana")); // true
// console.log('5', checkString("bananaaa", "banana")); // false
// console.log('6', checkString("banana", "banana")); // false
// console.log('7', checkString("b", "")); // false
