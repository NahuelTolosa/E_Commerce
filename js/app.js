(IsOnIndexPage()) ? ReadJSON(`/json/db.json`) : ReadJSON(`../json/db.json`);
PrintCart();
SetActionButtonsOnCart();
