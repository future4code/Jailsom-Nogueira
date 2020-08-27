// Agora, implemente uma função que receba um array de usuários e uma mensagem e envie essa mensagem como notificação para todos os usuários.
// A princípio, não utilize o `Promise.all`

// *a. O que aconteceria se fizéssemos a requisição dentro de um `forEach`? É recomendável utilizá-lo nesse caso?*
// Sempre que for uma função assíncrona em um loop, devemos usar o for

// *b. Implemente a função solicitada*
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
        sendNotifications(subscriber, 'Se você estiver lendo esta msg quer dizer que já não estou tão perdido na matéria')
      )
    }

  } catch (e) {
    console.log(e.response.data)
  }
};
  
  main()