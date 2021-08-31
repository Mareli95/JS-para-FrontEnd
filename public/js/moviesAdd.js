// ** Probando conexión
console.log('Funciona la conexión ');

// ** Capturando los sigueintes elementos
let titulo = document.querySelector('h1');
let section = document.querySelector('section');
let article = document.querySelector('article');

titulo.innerHTML = 'AGREGAR PELÍCULAS';
titulo.classList.add('titulo');

article.classList.add('fondoTransparente');

section.classList.add('fondoCRUD');
