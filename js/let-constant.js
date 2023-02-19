// breakup with var
// no more use of var
// let-> let it to reassign
// constant-> do not allow to reassign
let money = 2500;
money = 2000;
console.log(money);
const m = 50;
// m = 100;
// console.log(m);
// object
const student = {
    name: 'ali',
    id:24,
};
student.name = 'MD';
console.log(student.name);
const numbers = [1, 2, 12, 2];
for (let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}