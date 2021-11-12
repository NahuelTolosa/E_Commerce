class Product{

    constructor(id,nombre,descripcion,precio){
        this.id = id;
        this.nombre = nombre;
        this.descripción = descripcion;
        this.precio = precio;
    }
}

let arrayDB = [ new Product('B01', 'Buzo01', 'Buzo ajustado gris', 3000),
                new Product('B02', 'Buzo02', 'Buzo suelto marrón, azul y blanco', 3750),
                new Product('B03', 'Buzo03', 'Buzo ajustado rosa', 3600),
                new Product('B04', 'Buzo04', 'Buzo suelto marrón', 3500),
                new Product('B05', 'Buzo05', 'Buzo ajustado gris', 3360),
                new Product('B06', 'Buzo06', 'Buzo ajustado negro', 4000),
              ];