window.onload = function() {
    loadProducts();

    document.querySelector('.js-item-list-area')
        .addEventListener('click', function(event) {
            for (var i = 0; i < event.path.length; i++) {
                var path = event.path[i];
                if (typeof path.attributes === 'object') {
                    for (var x = 0; x < path.attributes.length; x++) {
                        var attribute = path.attributes[x];
                        if (attribute.name === 'data-item-id') {
                            alert(attribute.value)
                        }
                    }
                }
            }
        })

    document.querySelector('.js-load-more-btn')
        .addEventListener('click', loadProducts)
}

function loadProducts() {
    var listingAreaEl = document.querySelector('.js-item-list-area');
    var loadMoreBtnTextEl = document.querySelector('.js-load-more-btn-text');

    loadMoreBtnTextEl.innerHTML = 'Please wait...';
    this.disabled = true

    var productsRequest = getProducts();
    productsRequest.send();

    productsRequest.addEventListener('load', function() {
        var products = JSON.parse(productsRequest.response);

        for (var i = 0; i < products.length; i++) {
            var listItemEl = document.createElement('div');
            listItemEl.classList.add('list-item');
            listItemEl.setAttribute('data-item-id', products[i].id)
            listItemEl.innerHTML = itemTemplate.format(products[i].image, products[i].title, products[i].price);

            listingAreaEl.appendChild(listItemEl);
        }

        this.disabled = false;
        loadMoreBtnTextEl.innerHTML = 'Load more';
    })
}