
// Optional Properties (?)

// Optional means:

// “This property may or may not exist”

// interface User {
//   name: string;
//   age?: number;
// }


// Usage:

// let user1: User = { name: "Ali" };
// let user2: User = { name: "Ahmed", age: 22 };


// Access safely:

// if (user2.age) {
//   console.log(user2.age);
// }

// Readonly Properties

// Readonly means:

// “This value cannot be changed after creation”

// interface User {
//   readonly id: number;
//   name: string;
// }

// user.id = 5; // error

// Optional + Readonly Together
// interface Product {
//   readonly id: number;
//   name: string;
//   description?: string;
// }


interface User {
    readonly id: number;
    name: string;
    age?: number;
}

let user1: User = {
    id: 1,
    name: "Ali"
};

let user2: User = {
    id: 2,
    name: "Ahmed",
    age: 22
};

// user1.id = 10;  error

if (user2.age) {
    console.log("Age:", user2.age);
}

console.log(user1, user2);
