 //a
 const minhaString: string = 'Labenu';
 
 //b
 const meuNumero : number = 1;

 //c
 const person: { nome: string, idade: number, corFavorita: string} = {
  nome: 'Astrodev',
  idade: 30,
  corFavorita: 'amarelo',
  }
  
//d
type pessoa = { 
  nome: string, 
  idade: number, 
  corFavorita: string
};

const adulto: pessoa = {
  nome: 'Jailsom',
  idade: 36,
  corFavorita: 'cinza',
};

const crianca: pessoa = {
  nome: 'John',
  idade: 8,
  corFavorita: 'amarelo',
};

const bebe: pessoa = {
  nome: 'Doe',
  idade: 1,
  corFavorita: 'branco',
};

//e
enum ArcoIris {
  VERMELHO = 'vermelho',
  LARANJA = 'laranja',
  AMARELO = 'amarelo',
  VERDE = 'verde',
  AZUL = 'azul',
  ANIL = 'anil',
  VIOLETA = 'violeta',
  }

type LabenuTeacher = {
  class: ArcoIris
}

const amanda: LabenuTeacher = {
  class: ArcoIris.AMARELO
}