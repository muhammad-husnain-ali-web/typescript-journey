// // Why Generics Exist
// // Without generics:
// function identity(value: any) {
//   return value;
// }

// // Generic Function
// function identity<T>(value: T): T {
//   return value;
// }

// Usage:
// identity<string>("Hello");
// identity<number>(123);

// // Generic Arrays
// function getFirst<T>(items: T[]): T {
//   return items[0];
// }

// // Generic Interface
// interface ApiResponse<T> {
//   data: T;
//   status: number;
// }
// // Usage:
// const response: ApiResponse<string> = {
//   data: "Success",
//   status: 200
// };

function identity<T>(value: T): T {
  return value;
}

function getFirst<T>(items: T[]): T {
  return items[0];
}

interface ApiResponse<T> {
  data: T;
  status: number;
}

const text = identity<string>("TypeScript");
const numberValue = identity<number>(100);

const firstNumber = getFirst<number>([1, 2, 3]);

const response: ApiResponse<boolean> = {
  data: true,
  status: 200
};

console.log(text, numberValue, firstNumber, response);
