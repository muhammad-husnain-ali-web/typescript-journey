// // Base Class
// class User {
//   constructor(
//     public name: string,
//     protected role: string
//   ) {}

//   getRole(): string {
//     return this.role;
//   }
// }

// // Child Class (extends)
// class Admin extends User {
//   constructor(name: string) {
//     super(name, "admin");
//   }

//   accessAdminPanel(): void {
//     console.log(`${this.name} can access admin panel`);
//   }
// }

// // Test Access Control
// const admin = new Admin("Ali");

// console.log(admin.name);
// // console.log(admin.role);  error
// admin.accessAdminPanel();

class User {
  constructor(
    public name: string,
    protected role: string
  ) {}

  getRole(): string {
    return this.role;
  }
}

class Admin extends User {
  constructor(name: string) {
    super(name, "admin");
  }

  accessAdminPanel(): void {
    console.log(`${this.name} is an ${this.role}`);
  }
}

const admin = new Admin("Ali");

console.log(admin.name);
console.log(admin.getRole());
admin.accessAdminPanel();
