function JsonToArray(json){
    
}

function CreateGridItems(array, fragment) {

    for(let product of array){
        let itemContainer;
        if (product.isPopular){
            itemContainer = document.createElement("DIV");
            itemContainer.classList.add("img-containter");
            itemContainer.innerHTML = `
            <div class="img-containter__img">
                <img src="${product.image}" alt="${product.description}">
            </div>
            <div class="img-containter__info">
                <h4>${product.name}</h4>
                <p>$${product.price}</p>
            </div>
            <div class="img-container__option">
                <button class="button">Ver más</button>
                <button class="button buy-button" value="${product.id}">Comprar</button>
            </div>
        `;

            fragment.appendChild(itemContainer);
        }
    };

    return fragment;

}

function AddToCart(){
    console.log("Hola");
}