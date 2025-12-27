
// JavaScript Bad
// let user = {
//   name: "Ali",
//   age: 22
// };

// Explicit Object Type
// let user: { name: string; age: number } = {
//   name: "Ali",
//   age: 22
// };

// Type Aliases (USE THIS EVERYWHERE)
// type User = {
//   name: string;
//   age: number;
//   isAdmin: boolean;
// };

// let user1: User = {
//   name: "Ali",
//   age: 22,
//   isAdmin: false
// };

// Break It on Purpose
// let user2: User = {
//   name: "Ahmed",
//   age: "twenty",
//   isAdmin: true
// };


type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

let user1: User = {
  name: "Ali",
  age: 22,
  isAdmin: false
};

let user2: User = {
  name: "Ahmed",
  age: 25,
  isAdmin: true
};

console.log(user1, user2);
