let cart = {};

function ReadJSON(URL) {
    // fetch('../json/db.json')
    //     .then(res => res.json())
    //     .then(json => {
    //         CreateDinamicGrid(json);
    //         BuyButtonListener(json); /*AGREGA LOS EVENTOS A LOS BOTONES DE COMPRA*/
    //     });
        
    $(function() {
        $.ajax({
            type: "GET",
            url: URL,
            success: function(data) {
                CreateDinamicGrid(data);
                BuyButtonListener(data); /*AGREGA LOS EVENTOS A LOS BOTONES DE COMPRA*/
            }
        });
    });
}




function CreateDinamicGrid(products){
    for (const product of products) { /*CREA LOS ELEMENTOS LEIDOS*/

        if (IsOnIndexPage()) {
            if (product.isPopular)
                CreateGridNodes(product, `${product.image}`);
        }
        console.log(`../${product.image}`);
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
    if (IsOnCartPage()){
        LocalStorageToCar();
        ($.isEmptyObject(cart)) ? EmptyCartMessage() : CreateCartNodes();
    }

}

function EmptyCartMessage() {
    $(`#cart-main`).append(`<div class="paddin-top-bottom-20"><p class="empty-cart">El carrito está vacío.</p></div>`);
}

function CreateCartNodes() {

    let i = 1;

    for (const key in cart) {
        if (Object.hasOwnProperty.call(cart, key)) {
            const product = cart[key];

            $(`.cart-body`).append(`
                <tr id="${product.id}_row" class="cart__row">
                    <th class="cart-item">${i}</th>
                    <th class="cart-item">${product.name}</th>
                    <th id="quantity_${product.id}" class="cart-item">${product.quantity}</th>
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
                    <th class="cart-item">
                        <div class="trash-button">
                            <span id="${product.id}" class="iconify" data-icon="clarity:trash-line"></span>
                        </div>
                    </th>
                </tr>
            `);

        i++;

        }
    }

    $(`.cart-body`).append(`
        <tr class="cart__row">
            <th class="cart-item"><h5><b>Total:</b><h5></th>
            <th class="cart-item"></th>
            <th class="cart-item"></th>
            <th id="cart-total" class="cart-item"><h5><b>$${GetCartTotal()}</b><h5></th>
            <th class="cart-item"></th>
            <th class="cart-item"></th>
        </tr>
    `);

}

function GetIntPrice(price) {
    return price.slice(1,price.lenght);
}

function GetCartTotal() {
    let total = 0;

    for (const key in cart) {
        if (Object.hasOwnProperty.call(cart, key)) {
            total += (cart[key].price * cart[key].quantity);
        }
    }

    return total;
}

function SetActionButtonsOnCart() {
    // console.log(cart);

    if(IsOnCartPage()){
        $(`.plus-button`).on("click",(e)=>{
            IncreaseAmount(e.target.id);
            RefreshAmount(e.target.parentElement.parentElement.parentElement.parentElement, e.target.id);
            UpdateLocalStorage();
            UpdateCartTotal();
        });

        $(`.less-button`).on("click", (e) => {
            DecreaeseAmount(e.target.id);
            RefreshAmount(e.target.parentElement.parentElement.parentElement.parentElement, e.target.id);
            UpdateLocalStorage();
            UpdateCartTotal();
        });

        $(`.trash-button`).on("click",(e)=>{
            DeleteProduct(e.target.parentElement.parentElement.parentElement.parentElement, e.target.id);
            UpdateLocalStorage();
            UpdateCartTotal();
        });
    }
    
}

function IncreaseAmount(id) {
    cart[id].quantity += 1;
}

function DecreaeseAmount(id) {
    if (cart[id].quantity > 0)
        cart[id].quantity -= 1;    
}

function DeleteProduct(html,id) {
    html.querySelector(`#${id}_row`).remove();
    delete cart[id];
}

function RefreshAmount(html,id) {
    html.querySelector(`#quantity_${id}`).innerHTML = cart[id].quantity;
}

function UpdateLocalStorage() {
    CartToLocalStorege();
    // console.log(localStorage.getItem(`cart`));
}

function UpdateCartTotal(){
    document.querySelector(`#cart-total`).innerHTML = `<h5><b>$${GetCartTotal()}</b></h5>`;
}