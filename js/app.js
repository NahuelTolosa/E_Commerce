/*****************************************************CLASE*****************************************************/

class Product{

    constructor(id, name, description, price){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

/*****************************************************ARRAYS*****************************************************/

let arrayBuzos = [  new Product('B01', 'Buzo01', 'Buzo ajustado gris', 3000),
                    new Product('B02', 'Buzo02', 'Buzo suelto marrón, azul y blanco', 3750),
                    new Product('B03', 'Buzo03', 'Buzo ajustado rosa', 3600),
                    new Product('B04', 'Buzo04', 'Buzo suelto marrón', 3500),
                    new Product('B05', 'Buzo05', 'Buzo ajustado gris', 3360),
                    new Product('B06', 'Buzo06', 'Buzo ajustado negro', 4000),
                ];

let arrayCamisas = [ new Product('CI01', 'Camisa01', 'Camisa de jean negra', 2500),
                     new Product('CI02', 'Camisa02', 'Camisa texturizada gris', 2500)
                   ];

let arrayCamperas = [   new Product('CP01', 'Campera01', 'Campera azul,amarilla y gris', 3500),
                        new Product('CP02', 'Campera02', 'Campera de abrigo negra con capucha', 5000),
                        new Product('CP03', 'Campera03', 'Campera de jean azul', 4780),
                        new Product('CP04', 'Campera04', 'Campera con capucha suelta gris', 3990)
                    ];

let arrayPantalones = [ new Product('P01', 'Pantalon01', 'Pantalón jogging negro', 2560),
                        new Product('P02', 'Pantalon02', 'Pantalón jogging estilo camuflado negro y gris', 2690),
                        new Product('P03', 'Pantalon03', 'Pantalon jogging suelto gris', 2000),
                        new Product('P04', 'Pantalon04', 'Pantalón gabardina negro', 3290),
                        new Product('P05', 'Pantalon05', 'Pantalón jogging suelto negro', 2660)
                      ];

let arrayRemeras = [    new Product('R01', 'Remera01', 'Remera con cuello negra con pequeños detalles blancos', 1800),
                        new Product('R02', 'Remera02', 'Remera ajustada gris con estampado pequeño rosa', 1800),
                        new Product('R03', 'Remera03', 'Remera suelta gris y azul', 1320),
                        new Product('R04', 'Remera04', 'Remera ajustada blanca y negra', 1990)
                   ];

/*****************************************************FUNCIONES*****************************************************/

function askClient() {
    let option;

    do{
        option = prompt(`Elija qué productos desea ver:\n\n1. Buzos\n2. Camisas\n3. Camperas\n4. Pantalones\n5. Remeras`);

        if (!isValid(option))
            alert(`El valor ingresado es incorrecto.`);

    }while(!isValid(option));

    return parseInt(option);
}

function isValid(value){

    if(value <= 0 || value >= 6)
        return false;

    return true;
}

function constructList(products) {
    let productsList = 'Lista de productos solicitada:\n\n';

    products.forEach(element => {
        productsList += `Producto: ${element.name}\nDescripción: ${element.description}\nPrecio: $${element.price}\n\n`;
    });

    return productsList;
}

function showList(message){
    alert(`${message}`);
}

/************************************************MUESTRA POR PANTALLA************************************************/

switch(askClient()){
    case 1:
        showList(constructList(arrayBuzos));
        break;

    case 2:
        showList(constructList(arrayCamisas));
        break;

    case 3:
        showList(constructList(arrayCamperas));
        break;

    case 4:
        showList(constructList(arrayPantalones));
        break;

    case 5:
        showList(constructList(arrayRemeras));
        break;
}