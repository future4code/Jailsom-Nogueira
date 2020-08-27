// *a. Se apenas trocarmos o retorno da função para: `Promise<User[]>` , teremos algum erro de tipagem?*
// Não
// *b. Na aula, comentamos que sempre fazemos um mapeamento do resultado de uma Promise, caso seja inidicado que ela retorne um `Promise<any>`. Explique com as suas palavras o porquê de fazermos isso*
// Para garantir que o resultado da promise vai ser mostrado antes de a função executar qqr outra ação
// *c. Reimplemente a função, corretamente.*

import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

type Subscriber = {
	id: string,
	name: string,
	email: string,
}

const getSubscribers = async (): Promise<Subscriber[]> =>{
  const subscribers = await axios.get(`${baseUrl}/subscribers/all`);
  return subscribers.data.map((aSubscriber: any) => {
    return {
      id: aSubscriber.id,
      name: aSubscriber.name,
      email: aSubscriber.email,
    };
  });
};

getSubscribers().then((aSubscriber => {
  console.log(aSubscriber);
}));