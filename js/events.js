/*BOTON DE AGREGAR AL CARRITO*/

let button = document.querySelectorAll(".buy-button");

button.forEach(element => {
    element.addEventListener("click", AddToCart);
});

/*BOTON DE BORRAR DEL CARRITO*/