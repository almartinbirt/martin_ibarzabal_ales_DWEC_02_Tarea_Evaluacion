'use strict'

console.log('Empieza el programa')

// ------------------- VARIABLES GLOBALES ------------------------

// capturamos el formulario de introduccion de socios - Ejercicio 1
const formulario = document.querySelector('#formNombre')

// capturamos el contenedor donde escribiremos los socios - Ejercicio 2
const contenedorEscribirSocios = document.getElementById(
  'contenedorPintarSocios'
)

const error = document.querySelector('#error')

// TODO: array para añadir los socios
cargarSociosJSON()
// ------------------- FUNCIONES ------------------------

// EJERCICIO 1

/*
  funcion para leer del JSON
*/

let socios;

function cargarSociosJSON () {
  let path = 'model/datosSocios.json'

  let request = new Request(path, {
    headers: new Headers({
      'Content-Type': 'text/json'
    }),
    method: 'GET'
  })

  fetch(request).then(response => {
    response.json().then(data => {
      //console.log('Datos', data)
      socios = data;
      aniadirSociosInicialesArray("Ales", "Martin");
    })
  })
}

/* 
TODO:  metodo para añadir socios al array 
    cuando arranca la pagina web
*/
function aniadirSociosInicialesArray(nombre, apellido) {
  //  TODO: cargar el fichero JSON, parsearlo a objetos tipo "socio" y añadirlos al array
    document.getElementById('fnombre').value = nombre;
    document.getElementById('fapellido').value = apellido;
}

/*
    TODO: Meotodo para capturar los datos del socio introducidor en el formulario

*/
function capturarDatosSocio () {
  ;
  let valorNombre = document.getElementById('fnombre').value;
  let valorApellido = document.getElementById('fapellido').value;

  if(valorNombre!='' && valorApellido !=''){
    error.innerHTML = '';
    crearSocio(valorNombre, valorApellido)
  } else {
    error.innerHTML = '<p>Debes de introducir un Nombre y Apellido válidos</p>';
    console.log('ERROR');
  }
  
}

/* 
TODO: 
    Metodo para crear un socio pasandole el nombre y el apellido
    y añadirlo al array
 */
function crearSocio (nombre, apellido) {
  // TODO: crear objeto socio
  // TODO: añadir el objeto al array
  socios.push({'ID': crearID(), 'nombre': nombre, 'apellido': apellido});
  //console.log(socios);
}

/*
TODO: 
    Metodo para crear el ID del socio en funcion del ultimo
    ID que hay en el array de socios
*/
function crearID () {
  // TODO: mirar el id del ultimo socio del array y sumarle uno
  return socios.length + 1;
}

// EJERCICIO 2

/*
  TODO: metodo que elimina la lista previamente pintada en el contenedor asignado 
  para pintar socios, recorre el array con un bucle y pinta los socios 
*/
function pintarListaSocios () {
  //TODO: borramos todo lo que hay en el div
  //TODO: bucle para recorrer y pintar el array de socios
  //TODO: debemos añadir los socios a la pagina web
  contenedorEscribirSocios.innerHTML = "";
  error.innerHTML = '';
  for(let x=0; x < socios.length; x++) {
    contenedorEscribirSocios.innerHTML += '<p>Socio número: ' + socios[x]['ID'] + ' ' + socios[x]['nombre'] + ' ' + socios[x]['apellido'] + '</p>';
  }
  console.log(socios);  
}

// ------------------- MAIN ------------------------

// TODO: añadimos los socios iniciales cuando empieza el programa
console.log('Acaba el programa')
