class Student{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
}
let studentList=new Array();
let n = +prompt("Nhap so luong them di thay An:");
for(let i = 0;i<n;i++){
    let student = new Student();
    student.id = prompt("Nhap id:");
    student.name = prompt("Nhap name:");
    studentList.push(student);
}
console.log(studentList);