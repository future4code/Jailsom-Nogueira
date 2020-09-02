// 1
//a. Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
//Não seconsegui imprimir nenhuma, mas não faço ideia pq, já que estão todas publicas

export interface Client {
  name: string;
  registrationNumber: number,
  consumedEnergy: number,

  calculateBill(): number;
}
