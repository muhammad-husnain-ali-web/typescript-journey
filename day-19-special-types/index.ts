// // any vs unknown (CRITICAL)
// let valueAny: any = 10;
// valueAny.toUpperCase(); //  no error, runtime crash

// let valueUnknown: unknown = 10;
// valueUnknown.toUpperCase();  compile error


// //  Narrowing unknown
// function processValue(value: unknown) {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   }
// }

// //  void (FUNCTION RETURNS NOTHING)
// function logMessage(msg: string): void {
//   console.log(msg);
// }


// // never (IMPOSSIBLE STATES)
// function throwError(message: string): never {
//   throw new Error(message);
// }


// //  never in Exhaustive Checks (ADVANCED)
// type Status = "loading" | "success" | "error";

// function handleStatus(status: Status) {
//   switch (status) {
//     case "loading":
//       return "Loading...";
//     case "success":
//       return "Success!";
//     case "error":
//       return "Error!";
//     default:
//       const _exhaustive: never = status;
//       return _exhaustive;
//   }
// }


function logMessage(msg: string): void {
  console.log(msg);
}

function throwError(message: string): never {
  throw new Error(message);
}

function processValue(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log("Not a string");
  }
}

type Status = "loading" | "success" | "error";

function handleStatus(status: Status) {
  switch (status) {
    case "loading":
      return "Loading";
    case "success":
      return "Success";
    case "error":
      return "Error";
    default:
      const _never: never = status;
      return _never;
  }
}

processValue("hello");
logMessage("Done");
