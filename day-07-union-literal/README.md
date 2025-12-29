## Day 7 – Union & Literal Types in TypeScript

### What union types are
- Union types allow more than one type for a value
- A variable can accept multiple specified types
- Invalid types are rejected by TypeScript

### What literal types are
- Literal types allow only specific fixed values
- Any value outside the allowed list causes an error
- Commonly used for states and options

### Where they are used in real projects
- API response status like success or error
- User roles such as admin, user, or guest
- UI states like loading, success, and error

### One error TypeScript caught today
- Passing an invalid value that was not part of the union or literal type
- TypeScript stopped the code before runtime
