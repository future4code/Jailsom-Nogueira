// *a. Qual endpoint você deve utilizar para isso?*
//  https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all

// *b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?*
//  any

// *c. Implemente uma função nomeada que faça o que foi pedido.*
import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

async function getSubscribers(): Promise<any[]> {
  const subscribers = await axios.get(`${baseUrl}/subscribers/all`);
  console.log(subscribers.data)
  return subscribers.data;
};

getSubscribers()