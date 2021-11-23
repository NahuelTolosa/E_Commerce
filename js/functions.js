let cart = {};

function ReadJSON() {
    fetch('../json/db.json')
        .then(res => res.json())
        .then(json => {
            CreateDinamicGrid(json);
            BuyButtonListener(json); /*AGREGA LOS EVENTOS A LOS BOTONES DE COMPRA*/
        });
}

function CreateDinamicGrid(products){
    for (const product of products) { /*CREA LOS ELEMENTOS LEIDOS*/

        if (IsOnIndexPage()) {
            if (product.isPopular)
                CreateGridNodes(product, `${product.image}`);
        }

        if (IsOnProductsPage()){
            CreateGridNodes(product, `../${product.image}`);
        }
        
    }
}

function CreateGridNodes(product,imgLocation){
    $(()=>{
        $('.grid-section').append(
                `<div class="img-containter">
                        <div class="img-containter__img">
                            <img src="${imgLocation}" alt="${product.description}">
                        </div>
                        <div class="img-containter__info">
                            <h4>${product.name}</h4>
                            <p>$${product.price}</p>
                        </div>
                        <div class="img-container__option">
                            <button class="button">Ver más</button>
                            <button id="${product.id}" class="button buy-button">Comprar</button>
                        </div>
                    </div>`
            );
    });
    
}

function BuyButtonListener() {
    $(()=>{

        $(`.buy-button`).on('click',(e)=>{
            AddToCart(e.target.parentElement.parentElement);
        });

    });
}

const AddToCart = item => {

    //Primero paso los datos locales al array en caso que los haya
    LocalStorageToCar();
    
    //Creo el nuevo elemento que agregaré en el array
    const product = {
        id:          item.querySelector(`.buy-button`).id,
        name:        item.querySelector(`h4`).textContent,
        description: item.querySelector(`img`).alt,
        price:       GetIntPrice(item.querySelector(`p`).textContent),
        image:       item.querySelector(`img`).src,
        quantity:    1
    };

    //Si el elemento ya existe hago +1 en la cantidad
    if (cart.hasOwnProperty(product.id)){
        product.quantity = cart[product.id].quantity + 1;
    }

    //Lo agrego
    cart[product.id] = {...product};

    //Paso los datos del array al localSorage
    CartToLocalStorege();
    // console.log(`Cart: ${cart}\n\n\nLocal: ${localStorage.getItem('cart')}`);

}

function LocalStorageToCar() {
    if (!$.isEmptyObject(JSON.parse(localStorage.getItem(`cart`)))){
        cart = JSON.parse(localStorage.getItem(`cart`));
    }
}

function CartToLocalStorege() {
    localStorage.setItem(`cart`, JSON.stringify(cart));
}

function PrintCart(){
    if (IsOnCartPage())
        ($.isEmptyObject(localStorage.getItem(`cart`))) ? EmptyCartMessage() : CreateCartNodes();
}

function EmptyCartMessage() {
    $(`#cart-main`).append(`<div class="paddin-top-bottom-20"><p class="empty-cart">El carrito está vacío.</p></div>`);
}

function CreateCartNodes() {

    let i = 0;

    for (const key in JSON.parse(localStorage.getItem(`cart`))) {
        if (Object.hasOwnProperty.call(JSON.parse(localStorage.getItem(`cart`)), key)) {
            const product = JSON.parse(localStorage.getItem(`cart`))[key];

            $(`.cart-body`).append(`
                <tr class="cart__row">
                    <th class="cart-item">${i}</th>
                    <th class="cart-item">${product.name}</th>
                    <th class="cart-item">${product.quantity}</th>
                    <th class="cart-item">$${product.price}</th>
                    <th class="cart-item">
                        <div class="plus-less-buttons">
                            <div class="plus-button" id="${product.id}">
                                <span class="iconify" id="${product.id}" data-icon="ant-design:plus-circle-outlined"></span>
                            </div>
                            <div class="less-button" id="${product.id}">
                                <span class="iconify" id="${product.id}" data-icon="bi:dash-circle"></span>
                            </div>
                        </div>
                    </th>
                    <th class="cart-item"><span id="${product.id}" class="iconify trash-button" data-icon="clarity:trash-line"></span></th>
                </tr>
            `);

        i++;

        }

    }
    $(`.cart-body`).append(`
        <tr class="cart__row">
            <th class="cart-item"><h5>Total:<h5></th>
            <th class="cart-item"></th>
            <th class="cart-item"></th>
            <th class="cart-item"></th>
            <th class="cart-item"><h5>$00000<h5></th>
            <th class="cart-item"></th>
        </tr>
    `);

}

function GetIntPrice(price) {
    return price.slice(1,price.lenght);
}

function SetActionButtonsOnCart() {

    cart = JSON.parse(localStorage.getItem(`cart`));
    console.log(cart);

    if(IsOnCartPage()){
        $(`.plus-button`).on("click",(e)=>{
            IncreaseAmount(e.target.id);
        });

        $(`.less-button`).on("click", (e) => {
            DecreaeseAmount(e.target.id);
        });

        $(`.trash-button`).on("click",(e)=>{

        });
    }
    
}

function IncreaseAmount(id) {
    cart = JSON.parse(localStorage.getItem(`cart`));
    cart[id].quantity += 1;
    CartToLocalStorege();
}

function DecreaeseAmount(id) {
    cart = JSON.parse(localStorage.getItem(`cart`));
    cart[id].quantity -= 1;
    CartToLocalStorege();
}

function DeleteProduct() {
    
}

function RefreshAmount() {
    
}