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
for(let i =0;i<phoneBook.length;i++){
    console.log(phoneBook[i]);
}


