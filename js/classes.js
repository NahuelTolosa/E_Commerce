class Product{

    constructor(id, name, description, price, image, isPopular){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.isPopular = isPopular;
    }
}


/*****************************************************ARRAYS*****************************************************/


let arrayBuzos = [  new Product('B01', 'Buzo01', 'Buzo ajustado gris', 3000,'img/ropa/B01.JPG',true),
                    new Product('B02', 'Buzo02', 'Buzo suelto marrón, azul y blanco', 3750, 'img/ropa/B02.jpg', true),
                    new Product('B03', 'Buzo03', 'Buzo ajustado rosa', 3600, 'img/ropa/B03.jpg', false),
                    new Product('B04', 'Buzo04', 'Buzo suelto marrón', 3500, 'img/ropa/B04.jpg', false),
                    new Product('B05', 'Buzo05', 'Buzo ajustado gris', 3360, 'img/ropa/B05.jpg', false),
                    new Product('B06', 'Buzo06', 'Buzo ajustado negro', 4000, 'img/ropa/B06.jpg', false)
                 ];

let arrayCamisas = [ new Product('CI01', 'Camisa01', 'Camisa de jean negra', 2500, 'img/ropa/CI01.jpg', true),
                     new Product('CI02', 'Camisa02', 'Camisa texturizada gris', 2500, 'img/ropa/CI02.jpg', false)
                   ];

let arrayCamperas = [   new Product('CP01', 'Campera01', 'Campera azul,amarilla y gris', 3500, 'img/ropa/CP01.jpg', true),
                        new Product('CP02', 'Campera02', 'Campera de abrigo negra con capucha', 5000, 'img/ropa/CP02.jpg', false),
                        new Product('CP03', 'Campera03', 'Campera de jean azul', 4780, 'img/ropa/CP03.jpg', true),
                        new Product('CP04', 'Campera04', 'Campera con capucha suelta gris', 3990, 'img/ropa/CP04.jpg', false)
                    ];

let arrayPantalones = [ new Product('P01', 'Pantalon01', 'Pantalón jogging negro', 2560, 'img/ropa/P01.jpg', true),
                        new Product('P02', 'Pantalon02', 'Pantalón jogging estilo camuflado negro y gris', 2690, 'img/ropa/P02.jpg', false),
                        new Product('P03', 'Pantalon03', 'Pantalon jogging suelto gris', 2000, 'img/ropa/P03.jpg', false),
                        new Product('P04', 'Pantalon04', 'Pantalón gabardina negro', 3290, 'img/ropa/P04.jpg', true),
                        new Product('P05', 'Pantalon05', 'Pantalón jogging suelto negro', 2660, 'img/ropa/P05.jpg', false)
                      ];

let arrayRemeras = [new Product('R01', 'Remera01', 'Remera con cuello negra con pequeños detalles blancos', 1800, 'img/ropa/R01.jpg', false),
                    new Product('R02', 'Remera02', 'Remera ajustada gris con estampado pequeño rosa', 1800, 'img/ropa/R02.jpg', true),
                    new Product('R03', 'Remera03', 'Remera suelta gris y azul', 1320, 'img/ropa/R03.jpg', false),
                    new Product('R04', 'Remera04', 'Remera ajustada blanca y negra', 1990, 'img/ropa/R04.jpg', true)
                   ];
