// a*) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*
    // Para criar um estado inicial da classe. construtor(){}
// b*) Copie o código abaixo para o seu exercício de hoje; 
// crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). 
// Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
    // 1 vez
// c*) Como conseguimos ter acesso às propriedades privadas de uma classe?*
    //chamando elas dentro da própria classe ou através de Getters e Setters
import fs from 'fs'

class UserAccount {
  constructor(
    cpf: string,
    name: string,
    age: number,
 ) {
    console.log("Chamando o construtor da classe UserAccount")
    this.cpf = cpf;
    this.name = name;
    this.age = age;
 }
 //atributos
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

}
const user: UserAccount = new UserAccount ('00700700707', 'Jay', 36)

class Transaction {
  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description;
    console.log(this.date, this.value, this.description)
  }

  private date: string;
  private value: number;
  private description: string;

  public getDate(): string {
    return this.date;
  }
  public getValue(): number {
    return this.value;
  }
  public getDescription(): string {
    return this.description;
  }

  public setDate(date: string) {
    this.date = date;
  }
  public setValue(value: number) {
    this.value = value;
  }
  public setDescription(description: string) {
    this.description = description;
  }
}

const transacao: Transaction = new Transaction ('16/06/1984', 15, 'deposito')

class Bank {
  private accounts: UserAccount[];
  private fileManager: JSONFileManager;

  constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
    this.accounts = accounts;
    this.fileManager = new JSONFileManager("data.json")
  }

}

class JSONFileManager {

  private fileName: string

  constructor(fileName: string) {
      this.fileName = fileName
  }

  public readDatabase(): Object {
      try {
          const fileData: string = fs.readFileSync(this.fileName).toString()
          return JSON.parse(fileData)
      } catch (error) {
          console.log(`Erro ao ler a base de dados: ${error.message}`)
          return []
      }
  }

  public writeToDatabase(data: any): void {
      try {
          const dataAsString: string = JSON.stringify(data, null, 3)
          fs.writeFileSync(this.fileName, dataAsString)
      } catch (error) {
          console.log(`Erro ao escrever na base de dados: ${error.message}`)
      }
  }
}