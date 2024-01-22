class Sach{
    constructor(author,name){
        this.author = author;
        this.name = name;
    }
}
let sach = [
    new Sach("Thieu","Nhung nguoi cung kho"),
    new Sach("duong","doan xem"),
    new Sach("son","sach vo"),
];
let found = false;
let timAuthor= prompt("Nhap ten tac gia di thay An:");
for(let i=0;i<sach.length;i++){
    if(sach[i].author==timAuthor){
        console.log(sach[i]);
        found = true;
        break;
    }
}
if (!found) {
    console.log("Không tìm thấy sách");
}