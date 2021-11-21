function ReadJSON(json) {
    for (const product of json) {

        if (jQuery(location).attr('href').includes(`index.html`)) {
            if (product.isPopular)
                CreateNodes(product, `${product.image}`);
        } else
            CreateNodes(product, `../${product.image}`);

    }
}

function CreateNodes(product,imgLocation){
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
                            <button id="${product.id}" class="button buy-button" >Comprar</button>
                        </div>
                    </div>`
            );
    });
    
}

function BuyButtonListener(product) {
    $(()=>{

        $(`.buy-button`).on('click',(e)=>{
            console.log(`Agregado ${e.target.id}`);
        });

    });
}