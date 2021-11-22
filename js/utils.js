function IsOnIndexPage() {
    return (jQuery(location).attr('href').includes(`index.html`)) ? true : false;
}

function IsOnCartPage() {
    return (jQuery(location).attr('href').includes(`cart.html`)) ? true : false;
}

function IsOnProductsPage() {
    return (jQuery(location).attr('href').includes(`products.html`)) ? true : false;
}