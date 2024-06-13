// catch el dom
const contenedor = document.getElementById('contenedor');

// Crear el elemento de imagen
const imagen = document.createElement('img');
imagen.src = 'img/logoUno.png'; // Cambia esto por la ruta de tu imagen
imagen.alt = 'Descripción de la imagen';
imagen.classList.add('logo');


// Crear el botón
const boton = document.createElement('button');
boton.textContent = 'Elije tus Avatares';
boton.classList.add('botonete'); // Añadir la clase para estilizar el botón si es necesario

// Agregar la imagen y el botón al contenedor
contenedor.appendChild(imagen);
contenedor.appendChild(boton);


const direcciones = ['img/logoUno.png', 'img/logoDos.png', 'img/logoTres.png', 'img/logoCuatro.png'];

let contador = 0;
boton.addEventListener('click', cambiarFoto);

function cambiarFoto() {
    contador++;

    if (contador >= direcciones.length) {
       contador = 0;
    } 
    
    imagen.src = direcciones[contador];

    
    
}
