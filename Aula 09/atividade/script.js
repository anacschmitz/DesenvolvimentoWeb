// Atividade 1:
// a> exibir uma lista dos nome de todos os carros em caixa alta;

let veiculos = [
  ['Safira', 4, true],
  ['Pegasos', 5, false],
  ['Omega', 2, true],
  ['Starlink', 4, false],
  ['Corsa', 1, true],
]
let maiusculo = veiculos.map((nome)=>nome[0].toUpperCase());
let passageiros = veiculos.filter((carro)=>carro[1] > 3).map((nomeCarro)=>nomeCarro[0]);

console.log(maiusculo);
console.log(passageiros);
console.log(estacionado);

function listaCarros(veiculos){
  let listaC = [];
  for(let x = 0 ; x < veiculos.length ; x++){
    let carro = veiculos[x];
    nomeCarro = carro[0];
    listaC.push(nomeCarro.toUpperCase());
  }
  return listaC;
  
}

let listaCarrosMaiusculas = listaCarros(veiculos)
console.log(listaCarrosMaiusculas)

// b> exibir uma lista com todos os carro que cabem mais ou igual do que 3 passageiros;

function carroTresPassageiros(veiculos){
  let listaC = [];
  for(let x = 0 ; x < veiculos.length ; x++){
    carro = veiculos[x]
    if(carro[1] >= 3){
      listaC.push(carro[0]);
    }    
  }
  return listaC;
}



let carrosComTres = carroTresPassageiros(veiculos);
console.log(carrosComTres);

// c> exibir qual o número da vaga que cada carro está estacionado: posição do carro na lista + 5;

function vagas(veiculos){
  let carroLista = [];
  for(let x = 0 ; x < veiculos.length ; x++){
    carroLista.push((veiculos[x])[0]);
    carroLista.push(x + 5);
  }
  return carroLista;
}

let vagasCarro = vagas(veiculos);
console.log(vagasCarro);

// d> exibir uma lista com todos os carro estacionados.

function carrosEstacionados(veiculos){
  let listaC = [];
  for(let x = 0 ; x < veiculos.length ; x++){
    let carro = veiculos[x]
    if (carro[2] == true){
      let carroEstacionado = carro[0];
      listaC.push(carroEstacionado);
    };
  }
  return listaC;
}

let carros = carrosEstacionados(veiculos);
console.log(carros);