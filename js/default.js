// function add(a, b) {
//     console.log(a, b);
//     // b = b || 0;
//     // if (b === undefined) {
//     //     b = 0;
//     // }
//     const add = a + b;
//     return add;
// }
function add(first, second=0) {
    const total = first + second;
    return total;
}
// const result = add(25);
// const result = add(25,50);
const result = add(10);
console.log(result);
function fullName(firstName, lastName='Ali') {
    const fullName = firstName + " " + lastName;
    return fullName;
}
const name = fullName('Md');
console.log(name);