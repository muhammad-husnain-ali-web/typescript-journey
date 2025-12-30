// Basic Interface
// interface User {
//   name: string;
//   age: number;
// }

// Usage:

// let user: User = {
//   name: "Ali",
//   age: 22
// };

// PART 4: Optional Properties
// interface User {
//   name: string;
//   age?: number;
// }


// age is optional now.

// PART 5: Readonly Properties
// interface User {
//   readonly id: number;
//   name: string;
// }

// user.id = 5; //  error

// PART 6: Interface for Functions
// interface Add {
//   (a: number, b: number): number;
// }

// const add: Add = (x, y) => x + y;

interface User {
  readonly id: number;
  name: string;
  age?: number;
}

let user1: User = {
  id: 1,
  name: "Ali",
  age: 22
};

let user2: User = {
  id: 2,
  name: "Ahmed"
};

interface Calculate {
  (a: number, b: number): number;
}

const multiply: Calculate = (x, y) => x * y;

console.log(user1, user2);
console.log(multiply(4, 5));
