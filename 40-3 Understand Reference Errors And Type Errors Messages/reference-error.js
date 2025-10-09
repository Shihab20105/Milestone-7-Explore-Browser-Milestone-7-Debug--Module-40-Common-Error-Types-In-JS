/*                      40-3 Understand Reference errors and Type errors messages */

/*
const x = 'Kendall'
const y = 'Jenner'
console.log(z);

Output:
D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\reference-error.js:6
console.log(z);
            ^

ReferenceError: z is not defined
    at Object.<anonymous> (D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\reference-error.js:6:13)






const x = 'Kendall'
const y = 'Jenner'
// console.log(z);

console.log(name);
const name = 'Mustafizur Rahman';

Output:
D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\reference-error.js:25
console.log(name);
            ^

ReferenceError: Cannot access 'name' before initialization
    at Object.<anonymous> (D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\reference-error.js:25:13)







const x = 'Kendall'
const y = 'Jenner'
// console.log(z);

console.log(name);
let name = 'Mustafizur Rahman';

Output:
D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\reference-error.js:46
console.log(name);
            ^

ReferenceError: Cannot access 'name' before initialization
    at Object.<anonymous> (D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\reference-error.js:46:13)








const x = 'Kendall'
const y = 'Jenner'
// console.log(z);

console.log(name);
var name = 'Mustafizur Rahman';      // You should not use this var method

Output: undefined








const x = 'Kendall'
const y = 'Jenner'
// console.log(z);

// console.log(name);
// var name = 'Mustafizur Rahman'; 

console.log(add(2,3));

function add(n1, n2){
    return n1 + n2
}

Output: 5







const x = 'Kendall'
const y = 'Jenner'
// console.log(z);

// console.log(name);
// var name = 'Mustafizur Rahman'; 

console.log(add2(2,3));

function add(n1, n2){
    return n1 + n2
}

const add2 = (n1, n2) => n1 + n2;

Output:
D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\reference-error.js:108
console.log(add2(2,3));
            ^

ReferenceError: Cannot access 'add2' before initialization
    at Object.<anonymous> (D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\reference-error.js:108:13)
*/








const x = 'Kendall'
const y = 'Jenner'
// console.log(z);

// console.log(name);
// var name = 'Mustafizur Rahman'; 

// console.log(add2(2,3));

function add(n1, n2){
    return n1 + n2
}

const add2 = (n1, n2) => n1 + n2;

function doSomething(){
    const sum = 55;
}

console.log(sum);
/*
Output:
D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\reference-error.js:151
console.log(sum);
            ^

ReferenceError: sum is not defined
    at Object.<anonymous> (D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\reference-error.js:151:13)
*/