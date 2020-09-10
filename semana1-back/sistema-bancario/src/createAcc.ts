import * as fs from 'fs'
import moment from 'moment'; 

moment.locale('pt-br');

const today: moment.Moment = moment();

type UserAcc = {
  name: string, 
  cpf: string, 
  birthDate: string
}

export function createAccount(user: UserAcc): void {
  try {
    //busca o array com todos os usuários
    const fileData: string = fs.readFileSync('./data.json').toString()
    let arrayUsers: any = JSON.parse(fileData)
    
    console.log("Já no banco",arrayUsers)
    console.log("Enviando",user)

    //pega o nascimento do usuário e a data de hj
    const moment1 = moment(user.birthDate,"DD/MM/YYYY")
    const moment2 = moment()
    //faz a diferença em segundos dessas datas
    const diffInSeconds = moment2.diff(moment1,"seconds")

    //compara se a diferença é maior que 568036800(18 anos)
    if(diffInSeconds > 568036800){
      //caso positivo, grava no array o novo usuário
      arrayUsers.push(user)
      fs.writeFileSync('./data.json', JSON.stringify(arrayUsers, null, 2)
      )
    } else{
      console.log("O usuário precisa ser maior de idade")
      console.log("Cadastro não realizado")
    }

  } catch (error) {
    console.log("Erro ao salvar os dados: " + error.message)
  }
}
createAccount({
  name: "Cris", 
  cpf: '00011100010', 
  birthDate: '16/05/1984'
})