class Person{
    constructor(id, name, phone, address){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address = address;
    }
}
let person = new Person(1,"thieu","0999999","nha");
console.log(person);

delete person.address;

console.log(person);

person.email = "nguyenthieu11021995@gmail.com";

console.log(person);
