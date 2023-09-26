let container = document.querySelector('.container');
let formulario = document.querySelector('.formulario');
let listaResultado = document.querySelector('.lista');
let tarefa = document.querySelector('.tarefa');
let itens = document.querySelector('li');
let listName = document.querySelector('tbody');

formulario.addEventListener('submit', async function(event){
  event.preventDefault();
  let name = tarefa.value;
  await getName(name);
})

async function getName(name) {
  let request = await fetch('https://servicodados.ibge.gov.br/api/v2/censos/nomes/' + name);
  let response = await request.json();
  let listaFrequencia = response[0]['res'];
  console.log(listaFrequencia);

  frequencia = listaFrequencia.map((res)=>'Período:' + res.periodo.replace('[', '').replace('[', '') + '- Frequência:' + res.frequencia);
  console.log(frequencia)
  console.log(response[0]['nome']);

  // listName.innerHTML = 
  // ` <tr>
  //   <td>${}

  //   </td>
  // </tr>`
  // teste()
}
