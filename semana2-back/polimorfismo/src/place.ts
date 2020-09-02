//2
//a. *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). 
// Qual foi o erro que o Typescript gerou?*
//b. *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*

export abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep;
  }
}