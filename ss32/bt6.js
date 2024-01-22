class Product {
    constructor(id, product_name, price) {
        this.id = id;
        this.product_name = product_name;
        this.price = price;
    }
}

function sortProducts(products) {
    return products.sort((a, b) => a.price - b.price);
}
let products = [
    new Product(1, 'iphone 12', 20000000),
    new Product(2, 'iphone 11', 10000000),
    new Product(3, 'samsung note 10', 500000000)
];
let sortedProducts = sortProducts(products);
console.log(sortedProducts);
