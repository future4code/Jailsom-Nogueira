// Agora, para treinar um pouco da sintaxe, reescreva a função do exercício 1 utilizando *arrow function*. 

// *a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona*
// Além das diferenças de sintaxe, não saberia apontar nada

// *b. Implemente a função solicitada, usando arrow function*
// async function getSubscribers(): Promise<any[]> {
//   const subscribers = await axios.get(`${baseUrl}/subscribers/all`);
//   return subscribers.data;
// };
import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const getSubscribers = async (): Promise<any[]> =>{
  const subscribers = await axios.get(`${baseUrl}/subscribers/all`);
  console.log(subscribers.data)
  return subscribers.data;
}

getSubscribers()