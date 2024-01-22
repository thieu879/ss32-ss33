// let person = {
//     // key: value
//     // properties(thuoojc tinh)
//     name: "Gia Thieu",
//     age: 19,
//     school: "PTIT",
//     curly: "Nhu phoc",
//     // methods(phuongw thuc)
//     eat: function(){
//         console.log("An nhom nhoam...");
//     },
//     flirt: function(){
//         console.log("Chao e, anh dung day tu chieu...");
//     },
//     nhinThayHuyen: function(){
//         console.log("Mat sang len!!!!");
//     },
// };

// // dung
// let dung = {
//     name: "Ngoc Dung",
//     age: 19,
//     school: "PTIT",
//     nhinThayNY: function(){
//         console.log("Mat sang len");
//     },

// }
// // duong
// let duong = {
//     name: "Manh duong",
//     age: 19,
//     school: "PTIT",
//     nhinThayNY: function(){
//         console.log("Mat sang len");
//     },

// }

// let student1={
//     name: "khanh duong",
//     age: 18,
//     grade: "good",
// };
// let student2={
//     name: "Manh duong",
//     age: 18,
//     grade: "average",
// };
// let student3={
//     name: "Khac hung",
//     age: 18,
//     grade: "normal",
// };



// constructor function
// function Student(name,age,grade) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//     this.introdece = function(){
//         console.log(this);
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// let student1 = new Student("khanh duong",18,"good");
// let student2 = new Student("Manh duong",19,"average");
// let student3 = new Student("Khac hung",18,"normal");
// console.log("Student1:",student1);
// console.log("Student2:",student2);
// console.log("Student3:",student3);

// student1.introdece();
// student2.introdece();
// student3.introdece();


// class
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHello(){
//         console.log("Hello!!!");
//     }
// }
// let person = new Person("Thieu",19);
// console.log(person);


// class Student{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     introduce(){
//         console.log(`Hello my name is ${this.name}. I am ${this.age}`);
//     }
// }
// let student1 = new Student("khanh duong",18);
// let student2 = new Student("Manh duong",19);
// let student3 = new Student("Khac hung",18);
// console.log(student1);
// console.log(student2);
// console.log(student3);
// student1.introduce();
// student2.introduce();
// student3.introduce();


// let person = {
//     // key: value
//     // properties(thuoojc tinh)
//     name: "Gia Thieu",
//     age: 19,
//     school: "PTIT",
//     curly: "Nhu phoc",
//     // methods(phuongw thuc)
//     eat: function(){
//         console.log("An nhom nhoam...");
//     },
//     flirt: function(){
//         console.log("Chao e, anh dung day tu chieu...");
//     },
//     nhinThayHuyen: function(){
//         console.log("Mat sang len!!!!");
//     },
// };

// console.log("Doi tuong person:", person);
// // dot notation(.)
// person.height = 1.93;
// person.weight = "90kg";
// console.log("Doi tuong person sau khi them height va weight",person);

// // read one

// console.log(`Xin chao ${person.name}, ban co NY ch???`);
// console.log(`Xin chao ${person["name"]}, ban co NY ch???`);


// // read all
// for(let key in person){
//     console.log(person,person[key]);
// }


// // update
// person.name = "Gia thieu dz";
// console.log(person);

// // delete
// delete person.age;
// console.log(person);

// class Student {
//     constructor(id,name){
//         this.id = id;
//         this.name = name;
//     }
// }

// const student = [
//     new Student(1,"Khanh Huyen"),
//     new Student(2,"Huyen Trang"),
//     new Student(3,"chi Ngoc"),
// ];
// console.log(student);

// // c-r-u-s opject array
// // read one
// console.log(student[0]);
// console.log(student[0].name);
// // read all
// for(let i = 0;i<student.length;i++){
//     console.log(`student ${i}`,student[i]);
// }

// // create
// let newStudent = new Student("","");
// newStudent.id = +prompt("Nhap id:");
// newStudent.name = prompt("Nhap name:");
// student.push(newStudent);
// console.log(newStudent);


// // update
// student[0].name = "Huyen Khanh";
// // delete(shift,splice,pop)
// student.pop();
// console.log(student);

// Đối tượng lồng đối tượng(nested object)
let person = {
    // key: value
    // properties(thuoojc tinh)
    name: "Gia Thieu",
    age: 19,
    school: "PTIT",
    curly: "Nhu phoc",
    // methods(phuongw thuc)
    eat: function(){
        console.log("An nhom nhoam...");
    },
    flirt: function(){
        console.log("Chao e, anh dung day tu chieu...");
    },
    nhinThayHuyen: function(){
        console.log("Mat sang len!!!!");
    },
    address: {
        number: 20,
        street: "Tran phu",
        zipcode: 100000,
    },
};

person.address.zipcode;
console.log(person.address.zipcode);