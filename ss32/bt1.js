class People{
    constructor(id,name,phone,address){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address = address;
    }
    
}
let people = new People();
people.id = prompt("Nhap id:");
people.name = prompt("Nhap name:");
people.phone = prompt("Nhap phone:");
people.address = prompt("Nhap address:");
console.log(people);