//Encuentra al elemento HTML (el boton) mediante su ID
const miBoton = document.getElementById('miBoton');

//Define la funcion que se ejecutara cuando se haga click en el boton
function handleClick() {
    alert('¡Hola! Has hecho click en el botón')
};

//Añadimos un oyente de eventos que "escuche" el evento "click"
miBoton.addEventListener("click", function () {
    alert('¡Hola! Has hecho click en el botón')
});
