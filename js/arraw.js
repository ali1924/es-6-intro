// function declatation
function add(first, second) {
    const total = first + second;
    return total;
}
// function expression
const add1 = function add(first, second) {
    const total = first + second;
    return total;
}
// anonymus function expression
const add2 = function (first, second) {
    const total = first + second;
    return total;
}
const add3 = function (first, second) {
    return first + second;
}
// Arrow function
const first = 4, second = 7;
const add4 = (first, second) => first + second;

const result = add(10,20);
console.log(result);
const arrowF = add4(50, 60);
console.log(arrowF);
