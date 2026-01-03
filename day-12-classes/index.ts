// Basic Class
// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// Access Modifiers
// public (default)

// Accessible everywhere.

// private

// Accessible only inside the class.

// protected

// Accessible inside class and subclasses.

// // Constructor Shorthand (IMPORTANT)
// class User {
//   constructor(
//     public name: string,
//     private age: number
//   ) {}
// }


// This:

// Declares properties

// Assigns values

// Enforces access control

// All in one line.
// Method Example
// class User {
//   constructor(
//     public name: string,
//     private age: number
//   ) {}

//   getAge(): number {
//     return this.age;
//   }
// }


class User {
  constructor(
    public name: string,
    private age: number,
    protected role: string
  ) {}

  getAge(): number {
    return this.age;
  }
}

const user = new User("Ali", 22, "admin");

console.log(user.name);
// console.log(user.age);  error
console.log(user.getAge());
