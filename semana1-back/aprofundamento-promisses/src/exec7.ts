// Para finalizar, vamos implementar algumas funcionalidades:
// *a. Crie uma função que crie um novo assinante no nosso jornal*
// *b. Crie uma função que seja responsável pela criação de uma notícia. Só que, dessa vez, além de criar a notícia, 
// ela deve enviar uma notificação para cada um dos usuários*
// *c. Crie uma função que pegue todas as notificações de todos os usuários da aplicação*
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
    //criando um novo assinante
    type body = {
      name: string,
      email: string
    }
    const createNewSubscriber = async (body: body)
      : Promise<void> =>{
      try {
        await axios.put(`
          ${baseUrl}/subscribers`, 
          body
        );
      } catch (error) {
        console.log(error.message);
      }
    }
    await createNewSubscriber({
      name: "Jay", 
      email: "jay@jaymail.com" 
    })
    //criando a danada da noticia
    type bodyCreateNews = {
      title: string,
      content: string,
      date: number
    }
    const createNew = async (body: bodyCreateNews)
      : Promise<void> =>{
      try {
        await axios.put(`${baseUrl}/news`, body);
      } catch (error) {
        console.log(error.message);
      }
    }
    await createNew({
      title: "O Jay assinou um jornal", 
      content: "Espectadores ficaram incrédulos com a noticia de que Jay abrou a mão para assinar um jornal.", 
      date: Date.now()
    })
    //mostrando todas as noticias
    const getNews = async (): Promise<any[]> =>{
      const allNews = await axios.get(`${baseUrl}/news/all`);
      console.log(allNews.data)
      return allNews.data;
    }
    await getNews()
    //Pegando todos os assinantes
    const subscribers = await getAllSubscribers();

    const promisesArray = [];
    //Salvando todos os assinantes num array e enviando notificações
    for (const subscriber of subscribers) {
      promisesArray.push(
        sendNotifications(subscriber, 'Novidades!!!')
      )
    }

    await Promise.all(promisesArray);
    console.log('Coisou');
    
} catch (e) {
  console.log(e.response.data)
  }
};

main()