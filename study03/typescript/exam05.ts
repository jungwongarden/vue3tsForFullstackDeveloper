// 유니언 타입
function strOrNum(value: string | number): void {
    if (typeof value === 'string') {
        console.log(value.toString());
    } else if (typeof value === 'number') {
        console.log(value.toLocaleString());
    } else {
        throw new TypeError('문자열 또는 숫자를 입력해주세요!');
    }
}
strOrNum('hello world');
strOrNum(1004);


// 교차 타입
interface Person {
    name: string;
    age: number;
}
interface Developer {
    name: string;
    skill: string;
}
type Capt = Person & Developer;
let devPerson: Capt = {
    name: "kim",
    age: 777,
    skill: "FE"
};
console.log(devPerson);
