function CreateNodes(product,imgLocation){
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
                    <button class="button buy-button" value="${product.id}">Comprar</button>
                </div>
            </div>`
    );
}