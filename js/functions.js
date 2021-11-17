function CreateGridItems(array, fragment) {

    array.forEach(element => {
        let itemContainer;
        if (element.isPopular){
            itemContainer = document.createElement("DIV");
            itemContainer.classList.add("img-containter");
            itemContainer.innerHTML = `
            <div class="img-containter__img">
                <img src="${element.image}" alt="${element.description}">
            </div>
            <div class="img-containter__info">
                <h4>${element.name}</h4>
                <p>$${element.price}</p>
            </div>
            <div class="img-container__option">
                <button class="button">Ver más</button>
                <button class="button buy-button" value="${element.id}">Comprar</button>
            </div>
        `;

            fragment.appendChild(itemContainer);
        }
    });

    return fragment;

}

function AddToCart(){
    console.log("Hola");
}