const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//le falto . a la clase
const $b = document.querySelector('.blog');//# esta mal es un .
const $l = document.querySelector('.location');

//lefalta la palabra async a la funcion
 async function displayUser(username) { 
  $n.textContent = 'cargando...';
try{
  const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); //obtener los datos
  console.log(data);
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;//Se LE AGREGAN BACTIS
}catch (err) {
   handleError(err);
}
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`// Le falta el $ para que este bien definido
}

displayUser('stolinski');