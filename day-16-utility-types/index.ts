// // Base Type (USED EVERYWHERE)
// type User = {
//   id: number;
//   name: string;
//   email: string;
//   isAdmin: boolean;
// };

// // Partial<T> — Make Everything Optional
// // Use case:
// // Update forms
// // PATCH requests
// type UpdateUser = Partial<User>;
// const updateData: UpdateUser = {
//   name: "Ali Updated"
// };

// // Pick<T, K> — Select Specific Fields
// // Use case:
// // Public data
// // API responses
// type UserPreview = Pick<User, "id" | "name">;
// const preview: UserPreview = {
//   id: 1,
//   name: "Ali"
// };

// // Omit<T, K> — Remove Fields
// // Use case:
// // Removing sensitive data
// type SafeUser = Omit<User, "email">;
// const safeUser: SafeUser = {
//   id: 1,
//   name: "Ali",
//   isAdmin: false
// };

// // Readonly<T> — Prevent Mutation
// // Use case:
// // State objects
// // Config data
// type ReadonlyUser = Readonly<User>;
// // readonlyUser.name = "New";  error

type User = {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
};

const updateUser = (data: Partial<User>): void => {
  console.log("Updating user:", data);
};

type UserPreview = Pick<User, "id" | "name">;

type SafeUser = Omit<User, "email">;

type ReadonlyUser = Readonly<User>;

const preview: UserPreview = {
  id: 1,
  name: "Ali"
};

const safeUser: SafeUser = {
  id: 2,
  name: "Ahmed",
  isAdmin: true
};

const readonlyUser: ReadonlyUser = {
  id: 3,
  name: "Sara",
  email: "sara@test.com",
  isAdmin: false
};

// readonlyUser.name = "Test"; error

console.log(preview, safeUser, readonlyUser);
