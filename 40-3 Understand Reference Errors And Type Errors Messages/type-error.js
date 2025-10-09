/*                      40-3 Understand Reference errors and Type errors messages */
/*
const numbs = 5;
numbs.push(45);

Output:
D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\type-error.js:4
numbs.push(45);
      ^

TypeError: numbs.push is not a function
    at Object.<anonymous> (D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\type-error.js:4:7)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)





const numbs = 5;
// numbs.push(45);

let address;

console.log(address.home);

Output:
D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\type-error.js:25
console.log(address.home);
                    ^

TypeError: Cannot read properties of undefined (reading 'home')
    at Object.<anonymous> (D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\type-error.js:25:21)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)







const numbs = 5;
// numbs.push(45);

let address = {};

console.log(address.home);

Output: undefined







const numbs = 5;
// numbs.push(45);

let address = {city: 'Bibaria', postCode: 4560};

console.log(address.home.building);

Output:
D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\type-error.js:62
console.log(address.home.building);
                         ^

TypeError: Cannot read properties of undefined (reading 'building')
    at Object.<anonymous> (D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\type-error.js:62:26)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)








const numbs = 5;
// numbs.push(45);

let address = {city: 'Bibaria', postCode: 4560};

console.log(address?.home?.building);        // You will give optional chain

Output: undefined







const numbs = 5;
// numbs.push(45);

let address = {city: 'Bibaria', postCode: 4560};

console.log(address?.home?.building);        // You will give optional chain

const a = 'Tom';
a = 'Jane';

Output:
D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\type-error.js:103
a = 'Jane';
  ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (D:\Web Development\Milestone-7 Explore Browser Milestone 7& Debug\Module-40 Common Error Types In JS\40-3 Understand Reference Errors And Type Errors Messages\type-error.js:103:3)
*/








const numbs = 5;
// numbs.push(45);

let address = {city: 'Bibaria', postCode: 4560};

console.log(address?.home?.building);        // You will give optional chain

const a = 'Tom';
a = 'Jane';