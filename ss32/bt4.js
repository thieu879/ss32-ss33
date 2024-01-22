class Product{
    constructor(id, name, price, quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
let product = new Product(1,"vit","2k",10);
console.log(product);
for(let key in product){
    console.log(key);
}