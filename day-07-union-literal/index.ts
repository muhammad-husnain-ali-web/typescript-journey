// // Used when a value can be more than one type.
// let id: string | number;

// id = 101;
// id = "A101";
// // id = true; ❌ error

// // Union in Functions
// function printId(id: string | number): void {
//   console.log(id);
// }

// // Literal Types (Fixed Values)
// let role: "admin" | "user" 

// // role = "success";
// // role = "friend"; ❌ error
// // This is extremely common in APIs and UI states.

// // Combine Union + Literal (REALISTIC)
// type UserRole = "admin" | "user" | "guest";

// function checkAccess(role: UserRole): void {
//   console.log(`Role is ${role}`);
// }

let userId: string | number;
userId = 123;
userId = "U123";

type Status = "success" | "error" | "loading";

let currentStatus: Status = "loading";

function showStatus(status: Status): void {
  console.log("Status:", status);
}

showStatus("success");
// showStatus("done"); ❌ error
