import { Client } from './client'

const oneClient: Client = {
  name: "Jay",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  }
}

console.log(oneClient.name)
console.log(oneClient.registrationNumber)
console.log(oneClient.consumedEnergy)
// console.log(calculateBill())