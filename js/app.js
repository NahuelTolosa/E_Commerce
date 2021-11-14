/*****************************************************CLASE*****************************************************/

class Product{

    constructor(id, name, description, price,image){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image=image;
    }
}

/*****************************************************ARRAYS*****************************************************/

let arrayBuzos = [  new Product('B01', 'Buzo01', 'Buzo ajustado gris', 3000,'img/ropa/buzos/buzo001/22d0a714-9859-4140-a0fd-c5d17cb6a1e31-bb6268496dbb4b8d1b16216170415630-640-0.jpg'),
                    new Product('B02', 'Buzo02', 'Buzo suelto marrón, azul y blanco', 3750,'img/ropa/buzos/buzo002/549ead71-f054-4c48-a35c-634b625cf2db1-c14a6655b34a22aa8d16211050004471-480-0.jpg'),
                    new Product('B03', 'Buzo03', 'Buzo ajustado rosa', 3600,'img/ropa/buzos/buzo003/b60da305-ab1d-45aa-8058-5cfd282ec8161-b92ea99a0cf890774016216222085237-480-0.jpg')/*,
                    new Product('B04', 'Buzo04', 'Buzo suelto marrón', 3500,''),
                    new Product('B05', 'Buzo05', 'Buzo ajustado gris', 3360,''),
                    new Product('B06', 'Buzo06', 'Buzo ajustado negro', 4000,''),*/
                 ];

let arrayCamisas = [new Product('CI01', 'Camisa01', 'Camisa de jean negra', 2500,'img/ropa/camisas/camisa001/6ed679f0-fdd7-4f2f-a978-1cdeb4294ab11-bb0373d0826538460615877659766197-480-0.jpg')/*,
                     new Product('CI02', 'Camisa02', 'Camisa texturizada gris', 2500,)*/
                   ];

let arrayCamperas = [   new Product('CP01', 'Campera01', 'Campera azul,amarilla y gris', 3500,'img/ropa/camperas/campera001/5f98d1b0-083a-4545-a7e0-e1edbe780bdf1-824af9ad466329cb3d16216115618287-480-0.jpg'),
                        new Product('CP02', 'Campera02', 'Campera de abrigo negra con capucha', 5000,'img/ropa/camperas/campera002/56936618-807f-4034-b052-1ef808ba1fef1-f0154c376b105887c716216103548297-480-0.jpg'),
                        new Product('CP03', 'Campera03', 'Campera de jean azul', 4780,'img/ropa/camperas/campera003/3ec2ca5b-7068-4094-8040-129e329645ad1-58bb037f6f5d1c9bec16216109347709-640-0.jpg')/*,
                        new Product('CP04', 'Campera04', 'Campera con capucha suelta gris', 3990)*/
                    ];

// let arrayPantalones = [ new Product('P01', 'Pantalon01', 'Pantalón jogging negro', 2560),
//                         new Product('P02', 'Pantalon02', 'Pantalón jogging estilo camuflado negro y gris', 2690),
//                         new Product('P03', 'Pantalon03', 'Pantalon jogging suelto gris', 2000),
//                         new Product('P04', 'Pantalon04', 'Pantalón gabardina negro', 3290),
//                         new Product('P05', 'Pantalon05', 'Pantalón jogging suelto negro', 2660)
//                       ];

let arrayRemeras = [    new Product('R01', 'Remera01', 'Remera con cuello negra con pequeños detalles blancos', 1800,'img/ropa/remeras/remera001/482b65f9-7973-4d50-a511-e0c2947b97f61-eb73e22ff365d07a1416216217268011-640-0.jpg'),
                        new Product('R02', 'Remera02', 'Remera ajustada gris con estampado pequeño rosa', 1800,'img/ropa/remeras/remera002/e83efd19-1054-46e4-bb48-194580db59201-413b4757c4181e98fb16213681408027-640-0.jpg')/*,
                        new Product('R03', 'Remera03', 'Remera suelta gris y azul', 1320),
                        new Product('R04', 'Remera04', 'Remera ajustada blanca y negra', 1990)*/
                   ];

/*****************************************************FUNCIONES*****************************************************/

function CreateImgElementsList(array,fragment){

    for (let i = 0; i < array.length; i++){

        //Container de la imagenes y la info
        let itemContainer = CreateElement("DIV", "img-containter", "", "");

        //Div de la imagen
        let itemImageContainer = CreateElement("DIV", "img-containter__img", "", "");
        itemContainer.appendChild(itemImageContainer);

        //Etiqueta de la imagen
        let itemImage = CreateElement("IMG", "", "src", `${array[i].image}`);
        itemImageContainer.appendChild(itemImage);

        //Div de la informacion
        let itemInfo = CreateElement("DIV", "img-containter__info", "","");
        itemContainer.appendChild(itemInfo);

        //Etiqueta del título
        let itemTitle = CreateElement("H4", "", "", `${array[i].name}`);
        itemInfo.appendChild(itemTitle);

        //Etiqueta del precio
        let itemPrice = CreateElement("P", "", "", `$${array[i].price}`);
        itemInfo.appendChild(itemPrice);

        fragment.appendChild(itemContainer);
    }

    return fragment;
}

function CreateElement(_tag, _class, _atribute, _content){
    let element = document.createElement(_tag);

    if(_class != '')
        element.classList.add(_class);

    if (_atribute != '')
        element.setAttribute(_atribute, _content);
        
    else if (_content != '')
        element.innerHTML = _content;

    return element;
}

/************************************************MUESTRA POR PANTALLA************************************************/

let container = document.querySelector(".grid-area");

let fragment = document.createDocumentFragment();
fragment = CreateImgElementsList(arrayBuzos, fragment);
fragment = CreateImgElementsList(arrayCamisas, fragment);
fragment = CreateImgElementsList(arrayCamperas, fragment);
fragment = CreateImgElementsList(arrayRemeras, fragment);

container.appendChild(fragment);
