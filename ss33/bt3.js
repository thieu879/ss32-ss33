class PhoneBook{
    constructor(name,phone,email){
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}
let phoneBook = [
    new PhoneBook("Alice","123-456-7890","alice@example.com"),
    new PhoneBook("Bob","987-654-3210","ob@example.com"),
];
console.log(phoneBook);

