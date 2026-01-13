// // keyof (TURN OBJECT KEYS INTO A TYPE)
// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// type UserKeys = keyof User;
// // "id" | "name" | "email"

// // Real Use Case of keyof
// function getValue(obj: User, key: keyof User) {
//   return obj[key];
// }

// const user: User = {
//   id: 1,
//   name: "Ali",
//   email: "a@test.com"
// };

// getValue(user, "name");
// // getValue(user, "age");   error

// // Indexed Access Types (T[K])
// type UserNameType = User["name"]; // string
// type UserIdType = User["id"];     // number


// // You are extracting types from types.

// // Generic + keyof (POWER MOVE)
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// // Mapped Types (CORE CONCEPT)
// type ReadOnlyUser<T> = {
//   readonly [K in keyof T]: T[K];
// };


// // Yes this is how Readonly<T> is built.

// // Custom Mapped Type Example
// type Booleanify<T> = {
//   [K in keyof T]: boolean;
// };

// type UserFlags = Booleanify<User>;


// // Result:

// {
//   id: boolean;
//   name: boolean;
//   email: boolean;
// }

type User = {
  id: number;
  name: string;
  email: string;
};

type UserKeys = keyof User;

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type ReadOnlyType<T> = {
  readonly [K in keyof T]: T[K];
};

type UserFlags = {
  [K in keyof User]: boolean;
};

const user: User = {
  id: 1,
  name: "Ali",
  email: "a@test.com"
};

const nameValue = getProperty(user, "name");

const flags: UserFlags = {
  id: true,
  name: false,
  email: true
};

console.log(nameValue, flags);
