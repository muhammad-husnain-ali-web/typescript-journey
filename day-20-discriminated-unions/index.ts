// // Basic Example
// type LoadingState = {
//   status: "loading";
// };

// type SuccessState = {
//   status: "success";
//   data: string;
// };

// type ErrorState = {
//   status: "error";
//   message: string;
// };

// type State = LoadingState | SuccessState | ErrorState;

// status is the discriminant.

// // Automatic Narrowing
// function render(state: State) {
//   if (state.status === "loading") {
//     console.log("Loading...");
//   } else if (state.status === "success") {
//     console.log(state.data);
//   } else {
//     console.log(state.message);
//   }
// }



// //  Switch + never (PERFECT MODEL)
// function renderState(state: State) {
//   switch (state.status) {
//     case "loading":
//       return "Loading...";
//     case "success":
//       return state.data;
//     case "error":
//       return state.message;
//     default:
//       const _never: never = state;
//       return _never;
//   }
// }


// //  Real-World API Example
// type ApiResponse =
//   | { status: "loading" }
//   | { status: "success"; data: { id: number; name: string } }
//   | { status: "error"; error: string };


type State =
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; message: string };

function render(state: State) {
  switch (state.status) {
    case "loading":
      console.log("Loading...");
      break;
    case "success":
      console.log("Data:", state.data);
      break;
    case "error":
      console.log("Error:", state.message);
      break;
    default:
      const _never: never = state;
      console.log(_never);
  }
}

render({ status: "loading" });
render({ status: "success", data: "Hello" });
render({ status: "error", message: "Failed" });