//함수
function add(x: number, y: number): number {
    return x + y;
}

//함수2
function parseName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = parseName("Kim"); // 문제 없음
//let result2 = parseName("Kim", "Cortez", "Pg"); // 에러
let result3 = parseName("Kim", "Cortez"); // 문제 없음

console.log(add(100,28));
console.log(result1);
console.log(result3);