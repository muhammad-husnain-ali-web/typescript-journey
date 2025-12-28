// Function Parameter Types
// function add(a: number, b: number) {
//   return a + b;
// }
// Try breaking it:

// add(10, "20");
// TS should stop you.

// Return Types (Be Explicit)
// function multiply(a: number, b: number): number {
//   return a * b;
// }
// If you return something wrong, TS complains.

// void Functions
// Used when function does not return anything.
// function logMessage(message: string): void {
//   console.log(message);
// }

// Arrow Functions
// const subtract = (a: number, b: number): number => {
//   return a - b;
// };


function add(a: number, b: number): number {
  return a + b;
}

function logMessage(message: string): void {
  console.log(message);
}

const subtract = (a: number, b: number): number => {
  return a - b;
};

console.log(add(5, 10));
logMessage("TypeScript Functions");
console.log(subtract(10, 3));
