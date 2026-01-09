// // Interface (BEST for Objects)
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// // Interface Extension
// interface Admin extends User {
//   permissions: string[];
// }

// // Type Alias (More Flexible)
// type ID = number | string;
// type UserType = {
//   id: ID;
//   name: string;
// };

// // Union Types (TYPE ONLY)
// type Status = "loading" | "success" | "error";
// let state: Status;
// state = "loading";
// // state = "done";  error

// // Function Types
// type Add = (a: number, b: number) => number;
// const add: Add = (x, y) => x + y;

// // Interface Merging (INTERVIEW FAVORITE)
// interface Product {
//   id: number;
// }
// interface Product {
//   name: string;
// }

interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: "admin";
}

type Status = "loading" | "success" | "error";

type ID = number | string;

type Login = (id: ID) => boolean;

const login: Login = (id) => {
  return true;
};

const admin: Admin = {
  id: 1,
  name: "Ali",
  role: "admin"
};

let status: Status = "loading";

console.log(admin, status);
