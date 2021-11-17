
/*AGREGAR IMAGENES DESTACADAS*/

let container = document.querySelector(".grid-area");

let fragment = document.createDocumentFragment();

CreateGridItems(hoodiesJSON, fragment);
CreateGridItems(tShirtsJSON, fragment);
CreateGridItems(jacketsJSON, fragment);
CreateGridItems(pantsJSON, fragment);
CreateGridItems(shirtsJSON, fragment);

container.appendChild(fragment);
