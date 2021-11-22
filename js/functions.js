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

        if (jQuery(location).attr('href').includes(`index.html`)) {
            if (product.isPopular)
                CreateGridNodes(product, `${product.image}`);
        }

        if (jQuery(location).attr('href').includes(`products.html`)){
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
    console.log(item);
    const product = {
        id:         item.querySelector(`.buy-button`).id,
        name:       item.querySelector(`h4`).textContent,
        description:item.querySelector(`img`).alt,
        price:      item.querySelector(`p`).textContent,
        image:      item.querySelector(`img`).src,
        quantity:     1
    };

    if (cart.hasOwnProperty(product.id)){
        product.amount = cart[product.id].amount + 1;
    }

    cart[product.id] = {...product};

    // console.log(cart);
}

