//제네릭 선언
function logText<T>(text: T): T {
    console.log(text);
    return text;
}
logText<string>('Hello World!');

//interface에 제네릭 선언
interface Menu<T> {
    value: T;
    price: number;
}
const donut: Menu<string> = { value: 'donut', price : 3000 };
const potato: Menu<string> = { value: 'potato', price : 2000 };
const hamburger: Menu<string> = { value: 'hamburger', price : 5000 };

//배열 힌트
function textLength<T>(text: T[]): T[] {
    console.log(text.length);
    return text;
}
textLength<string>(['hello', 'world']);

//정의된 타입 이용 (extends)
interface LengthType {
    length: number;
}
function logTextLen<T extends LengthType>(text: T): T {
    console.log(text.length);
    return text;
}
logTextLen('hello world'); // 11
//logTextLen(100); // 에러!
logTextLen({ length: 100 }); // 100

//keyof
interface Item {
    name: string;
    price: number;
    stock: number;
}
function getItemOption<T extends keyof Item>(itemOption: T): T {
    return itemOption;
}
// 'name', 'price', 'stock'만 인자로 사용 가능
//getShoppingItemOption('price');