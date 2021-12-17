export const itemTemplate = '' +
    '<div class="product-image-area">' +
    '<img src="{0}" />' +
    '</div>' +
    '<div class="metadata-area">' +
    '<div class="product-name-area">' +
    '<span class="product-name-text">{1}</span>' +
    '</div>' +
    '<div class="product-price-area">' +
    '<span class="product-price-text">${2}</span>' +
    '</div>' +
    '</div>' +
    '';

String.prototype.format = function() {
    var args = arguments;

    console.log('args', args);
    return this.replace(/\{(\d+)\}/g, function() {
        return args[arguments[1]];
    });
};