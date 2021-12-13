var API_URL = 'https://fakestoreapi.com/products?limit=';

function getProducts(limit = 12) {
    var xhttpRequest = new XMLHttpRequest();
    xhttpRequest.addEventListener('load', function() {
        if (xhttpRequest.status !== 200) {
            alert('Error occurred from server, please try again!')
        }
    })

    xhttpRequest.open("GET", API_URL + limit, true);
    return xhttpRequest;
}