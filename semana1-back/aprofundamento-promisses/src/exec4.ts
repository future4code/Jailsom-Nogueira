// Vamos continuar as nossas funcionalidades da API. Crie uma função que permita criar uma nova notícia.

// *a. Qual é o tipo dessa função? Por quê?*
// PUT. To put another news there?

// *b. Implemente a função solicitada*
import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const main = async () => {
  try {
    type body = {
      title: string,
      content: string,
      date: number
    }
    const createNew = async (body: body)
      : Promise<void> =>{
      try {
        await axios.put(`${baseUrl}/news`, body);
      } catch (error) {
        console.log(error.message);
      }
    }
    await createNew({
      title: "A luta continua", 
      content: "Hoje você sabe mais do que ontem e menos do que amanhã.", 
      date: Date.now()
    })

    const getNews = async (): Promise<any[]> =>{
      const allNews = await axios.get(`${baseUrl}/news/all`);
      console.log(allNews.data)
      return allNews.data;
    }
    await getNews()
    
} catch (e) {
  console.log(e.response.data)
  }
};

main()