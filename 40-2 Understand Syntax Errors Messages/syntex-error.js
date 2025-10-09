/*                      40-2 Understand syntax errors messages */
/*
function isBigger(num){
    if(num > 5){
        return true;
    }
    else return false;
    }
//}

const result = isBigger(11);
console.log(result);

 
Output:
D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-2 Understand Syntax Errors Messages\syntex-error.js:9
}
^

SyntaxError: Unexpected token '}'
    at internalCompileFunction (node:internal/vm:77:18)






function isBigger(num){
    if(num > 5){
        return true;
    }
    else {
        return false
    }
}


const result = isBigger(11);
console.log(result);

Output: true







function isBigger(num){
    if(num > 5){
        return true;
    }
    else {
        return false
    }
}


const result = isBigger(11);
// console.log(result);

const sum = a, b => a + b;
const res = sum(3, 5);

Output:
D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-2 Understand Syntax Errors Messages\syntex-error.js:62
const sum = a, b => a + b;
               ^

SyntaxError: Missing initializer in const declaration
    at internalCompileFunction (node:internal/vm:77:18)
    at wrapSafe (node:internal/modules/cjs/loader:1288:20)
    






function isBigger(num){
    if(num > 5){
        return true;
    }
    else {
        return false
    }
}


const result = isBigger(11);
console.log(result);

const sum = (a, b) => a + b;
const res = sum(3, 5);

Output: true









function isBigger(num){
    if(num > 5){
        return true;
    }
    else {
        return false
    }
}


const result = isBigger(11);
// console.log(result);

const sum = (a, b) => a + b;
const res = sum(3, 5);

const musk = {
    name: 'Elon',
    age: 53
    job: 'tesla'
}

console.log(musk.age);

Output:
D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-2 Understand Syntax Errors Messages\syntex-error.js:125
    job: 'tesla'
    ^^^

SyntaxError: Unexpected identifier 'job'
    at internalCompileFunction (node:internal/vm:77:18)
    at wrapSafe (node:internal/modules/cjs/loader:1288:20)











function isBigger(num){
    if(num > 5){
        return true;
    }
    else {
        return false
    }
}


const result = isBigger(11);
// console.log(result);

const sum = (a, b) => a + b;
const res = sum(3, 5);

const musk = {
    name: 'Elon',
    age: 53,
    job: 'tesla'
}

console.log(musk.age);

Output: 53











function isBigger(num){
    if(num > 5){
        return true;
    }
    else {
        return false
    }
}


const result = isBigger(11);
// console.log(result);

const sum = (a, b) => a + b;
const res = sum(3, 5);

const musk = {
    name: 'Elon',
    age: 53,
    job: 'tesla'
}

console.log(musk.age);

const numbers = [12, 13, 21, 3, 34 4, 4,]

Output: 
D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-2 Understand Syntax Errors Messages\syntex-error.js:209
const numbers = [12, 13, 21, 3, 34 4, 4,]
                                   ^

SyntaxError: Unexpected number
    at internalCompileFunction (node:internal/vm:77:18)
    at wrapSafe (node:internal/modules/cjs/loader:1288:20)
    at Module._compile (node:internal/modules/cjs/loader:1340:27)










function isBigger(num){
    if(num > 5){
        return true;
    }
    else {
        return false
    }
}


const result = isBigger(11);
// console.log(result);

const sum = (a, b) => a + b;
const res = sum(3, 5);

const musk = {
    name: 'Elon',
    age: 53,
    job: 'tesla'
}

console.log(musk.age);

const numbers = [12, 13, 21, 3, 34, 4, 4,]

Output: 53











function isBigger(num){
    if(num > 5){
        return true;
    }
    else {
        return false
    }
}


const result = isBigger(11);
// console.log(result);

const sum = (a, b) => a + b;
const res = sum(3, 5);

const musk = {
    name: 'Elon',
    age: 53,
    job: 'tesla'
}

console.log(musk.age);

const numbers = [12, 13, 21, 3, 34, 4, 4,]

for(let i = 0; i < 10 i++){

}

Output:
D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-2 Understand Syntax Errors Messages\syntex-error.js:294
for(let i = 0; i < 10 i++){
                      ^

SyntaxError: Unexpected identifier 'i'
    at internalCompileFunction (node:internal/vm:77:18)
    at wrapSafe (node:internal/modules/cjs/loader:1288:20)
    at Module._compile (node:internal/modules/cjs/loader:1340:27)










function isBigger(num){
    if(num > 5){
        return true;
    }
    else {
        return false
    }
}


const result = isBigger(11);
// console.log(result);

const sum = (a, b) => a + b;
const res = sum(3, 5);

const musk = {
    name: 'Elon',
    age: 53,
    job: 'tesla'
}

console.log(musk.age);

const numbers = [12, 13, 21, 3, 34, 4, 4,]

for(let i = 0; i < 10; i++){

}

Output: 53









function isBigger(num){
    if(num > 5){
        return true;
    }
    else {
        return false
    }
}


const result = isBigger(11);
// console.log(result);

const sum = (a, b) => a + b;
const res = sum(3, 5);

const musk = {
    name: 'Elon',
    age: 53,
    job: 'tesla'
}

console.log(musk.age);

const numbers = [12, 13, 21, 3, 34, 4, 4,]

for(let i = 0; i < 10; i++){
    // const n = numbers[i;
    const n = numbers[i];
}

console.log(numbers);

if(numbers.length > 5) && (numbers[0] === 5){

}

Output:
D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-2 Understand Syntax Errors Messages\syntex-error.js:390
if(numbers.length > 5) && (numbers[0] === 5){
                       ^^

SyntaxError: Unexpected token '&&'
    at internalCompileFunction (node:internal/vm:77:18)
    at wrapSafe (node:internal/modules/cjs/loader:1288:20)
    at Module._compile (node:internal/modules/cjs/loader:1340:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)










function isBigger(num){
    if(num > 5){
        return true;
    }
    else {
        return false
    }
}


const result = isBigger(11);
// console.log(result);

const sum = (a, b) => a + b;
const res = sum(3, 5);

const musk = {
    name: 'Elon',
    age: 53,
    job: 'tesla'
}

console.log(musk.age);

const numbers = [12, 13, 21, 3, 34, 4, 4,]

for(let i = 0; i < 10; i++){
    // const n = numbers[i;
    const n = numbers[i];
}

console.log(numbers);

if((numbers.length > 5) && (numbers[0] === 5)){

}

Output:
53
[
  12, 13, 21, 3,
  34,  4,  4
]
*/











function isBigger(num){
    if(num > 5){
        return true;
    }
    else {
        return false
    }
}


const result = isBigger(11);
// console.log(result);

const sum = (a, b) => a + b;
const res = sum(3, 5);

const musk = {
    name: 'Elon',
    age: 53,
    job: 'tesla'
}

console.log(musk.age);

const numbers = [12, 13, 21, 3, 34, 4, 4,]

for(let i = 0; i < 10; i++){
    // const n = numbers[i;
    const n = numbers[i];
}

console.log(numbers);

if(numbers.length > 5 && numbers[0] === 5){

}

/* 
Output:
53
[
  12, 13, 21, 3,
  34,  4,  4
]
*/