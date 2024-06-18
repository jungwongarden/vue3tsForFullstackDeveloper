//typescript/exam03.ts

//interface 선언
interface User {
    age: number;
    name: string;
}

//변수 활용
const gitae: User = { name: "gitae", age: 42 }
console.log(gitae);

//함수 인자로의 활용
function getUser(user: User) {
    console.log(user);
}
getUser({ name: "gitae", age: 42 });

//함수 구조 활용
interface Add {
    (x: number, y: number): number;
}
let addFunc: Add = (a, b) => a + b; 
console.log(addFunc(48, 6));

//배열 활용
interface StringArr {
    [index: number]: string;
}
let arr: StringArr = ["a", "b", "c"];
console.log(arr);

//객체 활용
interface Obj {
    [key: string]: string;
}
const obj: Obj = {
    person1: "Gitae",
    person2: "Eric"
}
console.log(obj);

//Interface 확장
interface Person {
    name: string;
    age: number;
}
interface Developer extends Person {
    position: string;
}  
const dev: Developer = {
    name: "gitae",
    age: 42,
    position: "Fullstack"
};
console.log(dev);

