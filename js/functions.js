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
            // console.log(`Agregado ${e.target.id}`);
            AddToCart(e.target.parentElement.parentElement);
        });

    });
}

const AddToCart = item => {
    
    const product = {
        id:          item.querySelector(`.buy-button`).id,
        name:        item.querySelector(`h4`).textContent,
        description: item.querySelector(`img`).alt,
        price:       GetIntPrice(item.querySelector(`p`).textContent),
        image:       item.querySelector(`img`).src,
        quantity:    1
    };

    if (cart.hasOwnProperty(product.id)){
        product.quantity = cart[product.id].quantity + 1;
    }

    CartToLocalStorege();

    cart[product.id] = {...product};

}

function CartToLocalStorege() {
    localStorage.setItem(`${cart}`, JSON.stringify(cart));
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
                        <th class="cart-item">
                            <div class="plus-less-buttons">
                                <div class="plus-button">
                                    <span class="iconify" data-icon="ant-design:plus-circle-outlined"></span>
                                </div>
                                <div class="less-button">
                                    <span class="iconify" data-icon="bi:dash-circle"></span>
                                </div>
                            </div>
                        </th>
                        <th class="cart-item">$${product.price}</th>
                        <th class="cart-item"><span class="iconify" data-icon="clarity:trash-line"></span></th>
                    </tr>
            `);

        i++;

        }
    }
}

function GetIntPrice(price) {
    return price.slice(1,price.lenght);
}