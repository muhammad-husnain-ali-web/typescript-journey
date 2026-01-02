// Basic Assertion
// let value: unknown = "Hello TypeScript";

// let length = (value as string).length;


// Without assertion  error
// With assertion  allowed

// Why This Is Dangerous
// let value: unknown = 10;
// let length = (value as string).length; // runtime bug


// TS trusts you blindly.
// Type Assertions with DOM (VERY COMMON)
// const input = document.querySelector("input") as HTMLInputElement;
// console.log(input.value);


// Without assertion, TS says:

// “This might be null or not an input”
// Safer Alternative (Type Guard)
// const element = document.querySelector("input");

// if (element instanceof HTMLInputElement) {
//   console.log(element.value);
// }


let data: unknown = "TypeScript";

let textLength = (data as string).length;
console.log(textLength);

// DOM example (for understanding, may not run in Node)
const inputElement = document.querySelector("input") as HTMLInputElement;