
/*AGREGAR IMAGENES DESTACADAS*/
let container = document.querySelector(".grid-area");

let fragment = document.createDocumentFragment();

CreateGridItems(arrayBuzos, fragment);
CreateGridItems(arrayCamisas, fragment);
CreateGridItems(arrayCamperas, fragment);
CreateGridItems(arrayRemeras, fragment);
CreateGridItems(arrayPantalones, fragment);

container.appendChild(fragment);