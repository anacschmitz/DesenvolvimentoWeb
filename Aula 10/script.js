// let lista = [1,2,3,4]

// let teste = lista.forEach((item)=>{
//   return item;
// });

// console.log(teste);

// function SaveDB(){
//  alert('Informações armazenadas no BD')
// }

let container = document.querySelector('.container');
let formulario = document.querySelector('.formulario');
let listaTarefa = document.querySelector('.lista');
let tarefa = document.querySelector('tarefa');
let itens = document.querySelector('li');

formulario.addEventListener('submit', function(event){
  event.preventDefault();
  // console.log(tarefa.value);
  // let item = document.createElement('li');
  // item.innerHTML = tarefa.value; 
  // listaTarefa.appendChild(item);

  listaTarefa.innerHTML += '<li>%{tarefa.value}</li>';
  let itens = document.querySelectorAll('li');

  itens.forEach(function(item){
    item.addEventListener('click', function(event){
      // item.classList.add('vermelho');
      // item.classList.remove('vermelho');
      item.classList.toggle('vermelho');
    })

  })
})

async function getName() {
  let request = await fetch('https://servicodados.ibge.gov.br/api/v2/censos/nomes/AnaCarolina');
  let response = await request.json();
  console.log(response[0]['nome']);

}



// Promise: enquanto a requisição não retorna, após o envio do "pedido" aparece uma
// "promessa" de resposta.
getName();