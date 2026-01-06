// function printValue(value: string | number) {
//   // value.toUpperCase(); error
// }

// TS says:
// “I don’t know if this is string or number”

// // typeof Narrowing
// function printValue(value: string | number): void {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   } else {
//     console.log(value.toFixed(2));
//   }
// }

// // in Operator Narrowing
// type Admin = { role: "admin"; permissions: string[] };
// type User = { role: "user"; email: string };

// function checkPerson(person: Admin | User) {
//   if ("permissions" in person) {
//     console.log("Admin permissions:", person.permissions);
//   } else {
//     console.log("User email:", person.email);
//   }
// }

// // instanceof Narrowing (Classes)
// class Dog {
//   bark() {
//     console.log("Bark");
//   }
// }

// class Cat {
//   meow() {
//     console.log("Meow");
//   }
// }

// function makeSound(animal: Dog | Cat) {
//   if (animal instanceof Dog) {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(1));
  }
}

type Admin = {
  role: "admin";
  permissions: string[];
};

type User = {
  role: "user";
  email: string;
};

function checkPerson(person: Admin | User): void {
  if ("permissions" in person) {
    console.log("Admin permissions:", person.permissions);
  } else {
    console.log("User email:", person.email);
  }
}

class Dog {
  bark() {
    console.log("Bark");
  }
}

class Cat {
  meow() {
    console.log("Meow");
  }
}

function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

printValue("hello");
printValue(10);
checkPerson({ role: "admin", permissions: ["read", "write"] });
makeSound(new Dog());
