let formName = document.querySelector('.form-name')
let inputError = document.querySelector('.form-control') 
let retorno = document.querySelector('.fotoGato')
formName.addEventListener('submit', async function(e){
    e.preventDefault()
    // console.log(await getApi());
    let response = await getApi(inputError.value);
   
    retorno.innerHTML = `
     <img src="${response}" alt="">
     `
    });


async function getApi(error) {
  
    let request = await fetch('https://http.cat/' + error, {
    mode: 'no-cors'
    })
  

    let response = await request.text();
    return response
}

