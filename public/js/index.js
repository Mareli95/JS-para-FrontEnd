// **Para ver si funciona la conexión

console.log('Hola estas corriendo en frontEnd');

// **Capturar los elementos main,h2,a y p
let main = document.querySelector('main');
console.log(main);
let titulo = document.querySelector('h2');
console.log(titulo);
let referencia = document.querySelector('a');
console.log(referencia);
let parrafos = document.querySelectorAll('p');
console.log(parrafos);

// ** Indicar al usuario que ingrese su nombre
let nombre = prompt('Ingrese su nombre');
let invitado = 'invitado';

if (nombre != null) {
	let name = (titulo.innerText += ' ' + nombre);
	console.log(name);
} else if (nombre == null) {
	let name2 = (titulo.innerText += ' ' + 'invitado');
	console.log(name2);
}

// ** Agregar a la etiqueta h2 estilo uppercase
let letras = (titulo.style.textTransform = 'uppercase');

// ** Colocarle el estilo correspondiente para que <a> asuma el color: #E51B3E'
let colorA = (referencia.style.color = '#E51B3E');

// ** Preguntar al usuario si desea color un fondo de pantalla, si es afirmativa la respuesta se agrega la clase fondo
let conf = confirm('¿Desea colocar un fondo de pantalla?');
let body = document.querySelector('body');
if (conf == true) {
	body.classList.add('fondo');

	console.log('Se agrego el fondo');
} else {
	body.style.backgroundColor = 'white';

	console.log('Se agrego color blaco de fondo');
}

// ** Seleccionar los parrafos pares e impares y agregarles la clase destacadoPar o destacadoImpar dependiendo el caso.
let parrafosPares = document.querySelectorAll('p:nth-of-type(even)');
let parrafosImpares = document.querySelectorAll('p:nth-of-type(odd)');

for (i = 0; i < parrafosPares.length; i++) {
	// parrafosPares[i].style.color = 'red';
	parrafosPares[i].classList.add('destacadoPar');
}

for (i = 0; i < parrafosImpares.length; i++) {
	// parrafosPares[i].style.color = 'red';
	parrafosImpares[i].classList.add('destacadoImpar');
}

main.style.display = 'block';
