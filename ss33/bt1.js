class Person{
    constructor( name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
let person = new Person("thieu",20 ,"nha");
console.log(person);

person.birthday = "11/02/2005";

console.log(person);

delete person.age;

console.log(person);

