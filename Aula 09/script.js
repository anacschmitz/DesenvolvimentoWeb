// let texto = 'texto';
// let inteiro = 1;
// let decimal = 1.2;
// let booleano = true;
// let lista = ['a', 'q', 'q', 101, 103, ['12', 33]];
// let objeti = {
//     'nome': 'caio',

//     'email': 'w@gmail.com'};
// let nulo = null;
// let indefinido = undefined;

// let x = 10;
// let y = '10';

// console.log(x==y);
// console.log(x===y);

// function soma(a,b){
//   return a + b;
// }

// // console.log(soma(10,20));
// alert(soma(5,5))

// arrow function

// let soma = (a, b)=> a+b;
// console.log(soma(5,5));

// let soma = (a, b)=> {
//   console.log('estou na função');
//   return a + b;
// }
// console.log(soma(5,5));

// // callback

// let objeto = {
//   'nome' : 'Pedro',
//   'metodo': function(){
//     console.log(this.nome)
//   }
// }

// let objetoArrow = {
//   'nome' : 'Pedro',
//   'metodo': ()=>{
//     console.log(this.nome)
//   }
// }

// let objetoArrow = {
//   'nome' : 'Pedro',
//   'metodo': (nome)=>{
//     console.log(this.nome)
//   }
// }

// let objetoArrow = {
//   'nome' : 'Pedro',
//   'metodo': ()=>{
//     console.log(this.nome)
//   }
// }

// console.log(objeto.nome);
// objetoArrow.metodo();

// Solicitar do usuário o nome, idade e altura e criar uma função para 
// exibir os resultados na tela

// let nome = prompt('Digite o seu nome:');
// alert(`Seu nome é ${nome}`);
// let idade = prompt('Digite a sua idade:');
// alert(`Sua idade é ${idade}`);
// let altura = prompt('Digite a sua altura');
// alert(`Sua altura é: ${altura}`);

// function show() {
//   alert(`Seu nome é ${nome}`);
//   alert(`Sua idade é ${idade}`);
//   alert(`Sua altura é: ${altura}`);
// }

// show();

// console.log(nome, idade, altura)

// Laço de repetição:

// for(let x = 0; x <= 10; x++){
//   console.log(x)
// }

// let lista = ['maca', 'pera', 'uva'];

// for(let x=0 ; x < lista.length ; x++){
//   console.log(lista[x]);
// }

// let x = 25;
// function teste(){
//   for(let x = 0 ; x < 10 ; x++){}
// }

// teste();
// console.log(x);

// let x = 2;
// let y = 2;
// let z = 10;

// if(x === z){
//   console.log('x é igual à z');
// } else {
//   console.log('x é diferente de z');
// }

// if(x === z && x == z || z == x){
//   console.log('x é igual à z');
// } else {
//   console.log('x é diferente de z');
// }

// Atividade 1:
// a> exibir uma lista dos nome de todos os carros em caixa alta;
// b> exibir uma lista com todos os carro que cabem mais ou igual do que 3 passageiros;
// c> exibir qual o número da vaga que cada carro está estacionado: posição do carro na lista + 5;
// d> exibir uma lista com todos os carro estacionados.

// veiculos = [
//   ['Safira', 4, true],
//   ['Pegasos', 5, false],
//   ['Omega', 2, true],
//   ['Starlink', 4, false],
//   ['Corsa', 1, true],
// ]

// let letra = 'agnaldo'
// letra.toUpperCase();

// listaC = []
// llistaC.push('carro');
// console.log(listaC);

// let lista = [1,2,3,4,5,6,7,8,9,10]
// let quadrado = lista.map((numero)=>numero*numero)

// let produtos = ['Carro', 'Moto', 'Bicicleta', 'Batera']
// let filtro = produtos.filter((produto)=>produto === 'Moto')

const students = [
  { nome: 'Alice', nota: 85},
  { nome: 'Bob', nota: 72},
  { nome: 'Charlie', nota: 90},
  { nome: 'David', nota: 65},
  { nome: 'Eve', nota: 88},
];

// a) Array contendo todas as notas;
let estudantes = students.map((student)=>student.nota);
console.log(estudantes)

// b) Nome dos alunos que possuem nota acima da média;
const soma = estudantes.reduce((acumulador, valor) => {
  return acumulador + valor;
}, 0);

let media = soma / students.length;
console.log(media)

let filtro = students.filter((student)=>student.nota > media).map((nomeAluno)=>nomeAluno.nome);
console.log(filtro);
