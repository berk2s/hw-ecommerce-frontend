import { getProducts } from '../api'
import { itemTemplate } from '../template'

export const productPage = () => {
    if (document.querySelector('.js-item-list-area') !== null) {
        loadProducts();
        document.querySelector('.js-item-list-area')
            .addEventListener('click', (event) => {
                console.log(event);
                for (let i = 0; i < event.path.length; i++) {
                    let path = event.path[i];
                    if (typeof path.attributes === 'object') {
                        for (let x = 0; x < path.attributes.length; x++) {
                            let attribute = path.attributes[x];
                            if (attribute.name === 'data-item-id') {
                                alert(attribute.value);
                                return;
                            }
                        }
                    }
                }
            })

        document.querySelector('.js-load-more-btn')
            .addEventListener('click', loadProducts)
    }

}


export const loadProducts = () => {
    const listingAreaEl = document.querySelector('.js-item-list-area');
    const loadMoreBtnTextEl = document.querySelector('.js-load-more-btn-text');

    loadMoreBtnTextEl.innerHTML = 'Please wait...';
    //this.disabled = true

    getProducts().then((response) => response.json())
        .then((data) => {

            data.map(product => {
                const listItemEl = document.createElement('div');
                listItemEl.classList.add('list-item');
                listItemEl.classList.add('col-lg-3');
                listItemEl.classList.add('col-md-6');
                listItemEl.classList.add('col-sm-12');
                listItemEl.classList.add('col-xs-12');
                listItemEl.setAttribute('data-item-id', product.id)
                listItemEl.innerHTML = itemTemplate.format(product.image, product.title, product.price);

                listingAreaEl.appendChild(listItemEl);
            })

            // this.disabled = false;
            loadMoreBtnTextEl.innerHTML = 'Load more';
        })
        .catch(() => {
            alert('Something went wrong')
        })

}