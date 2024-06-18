//문자열
let hello: string = "helloWorld!";

//숫자
let tripleSeven: number = 1004;

//배열
let arr1: number[] = [100, 200, 300];
let arr2: Array<number> = [100 , 200, 300];
let arr3: Array<string> = ["hello", "world"];
let arr4: [string, number] = ["gitae", 42];

//객체
let man: object = { name: "gitae", age: 42 };
let person: { name: string; age: number } = {
  name: "gitae",
  age: 42
};

//불리언 (Boolean)
let isAngel: boolean = true;

console.log(hello);
console.log(tripleSeven);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(man);
console.log(person);
console.log(isAngel);
