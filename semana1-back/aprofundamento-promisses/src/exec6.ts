// Vamos reescrever a função anterior utilizando o `Promise.all`. Antes disso, responda as perguntas abaixo:

// *a. O que o `Promise.all` faz?*
// Envia todas as solicitações primeiro e espera por suas respostas depois
// *b. Quais as vantagens de se utilizar o `Promise.all` no caso de se enviar as notificações para todos os usuários?*
// Não recebe retornos antes mesmo de fazer todas as solicitações
// *c. Reimplemente a função utilizando `Promise.all`*
import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

type Subscriber = {
  id: string,
  name: string,
  email: string
}

const getAllSubscribers = async(): Promise<Subscriber[]> => {
  const subscribers = await axios.get(`${baseUrl}/subscribers/all`);
  return subscribers.data.map((subscriber: Subscriber) => {
    return {
      id: subscriber.id,
      name: subscriber.name,
      email: subscriber.email
    }
  })
};

const sendNotifications = async(subscriber: Subscriber, message: string): Promise<void> => {
  console.log('Enviando notificação para: ', subscriber.name);
  await axios.post(`${baseUrl}/notifications/send`, {
    subscriberId: subscriber.id,
    message
  });
  console.log('Notificação enviada para: ', subscriber.name);
};

const main = async () => {
  try {

    const subscribers = await getAllSubscribers();

    const promisesArray = [];

    for (const subscriber of subscribers) {
      promisesArray.push(
        sendNotifications(subscriber, 'Promise.all é o que msm?')
      )
    }

    await Promise.all(promisesArray);
    console.log('Coisou');

  } catch (e) {
    console.log(e.response.data)
  }
};
  
  main()