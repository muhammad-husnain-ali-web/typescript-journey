// Numeric Enums (Default)
// enum Role {
//   ADMIN,
//   USER,
//   GUEST
// }
// let userRole: Role = Role.ADMIN;


// Internally:
// ADMIN = 0
// USER = 1
// GUEST = 2

// String Enums (PREFERRED)
// enum Status {
//   SUCCESS = "success",
//   ERROR = "error",
//   LOADING = "loading"
// }


// Used heavily in APIs and UI state.
// Enums in Functions
// function setStatus(status: Status): void {
//   console.log("Status:", status);
// }

enum Role {
  ADMIN,
  USER,
  GUEST
}

enum Status {
  SUCCESS = "success",
  ERROR = "error",
  LOADING = "loading"
}

let role: Role = Role.USER;
let currentStatus: Status = Status.LOADING;

function printStatus(status: Status): void {
  console.log("Current status:", status);
}

printStatus(Status.SUCCESS);
console.log(role, currentStatus);

// printStatus("done"); // ❌ error
