// ** Probando conexión
console.log('Estas en la lista de películas');

//** Capturando los elementos body y h1 */

let body = document.querySelector('body');
let titulo = document.querySelector('h1');

// ** Preguntar al usuario ¿Desea agregar modo oscuro?, si es afirmativa agregar al body un color de fondo #7f7f7f la clase: fondoMoviesList .
let modo = confirm('¿Desea agregar modo oscuro?');

if (modo == true) {
	body.style.backgroundColor = '#7f7f7f';
	body.classList.add('fondoMoviesList');

	console.log('Se agrego el fondo y la clase');
} else {
	body.style.backgroundColor = 'white';
	console.log('No se agrego fondo');
}

// ** Agregar a la etiqueta h1 el mensaje "LISTADO PELÍCULAS";
titulo.innerHTML = 'LISTADO DE PELÍCULAS';

// **Agregar a la etiqueta <h1> los siguientes estilos:
// Color de la fuente: white .
// Color de fondo: teal .
// Relleno: 20px .

titulo.style.color = 'white';
titulo.style.backgroundColor = 'teal';
titulo.style.padding = '20px';
