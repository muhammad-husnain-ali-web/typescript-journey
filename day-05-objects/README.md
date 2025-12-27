## Day 5 – Objects & Type Aliases

### Why object typing is important
- It defines the shape of an object
- It ensures correct property names and types
- It prevents wrong or missing values

### What a type alias is
- A reusable definition for an object structure
- Helps avoid repeating the same object type
- Makes code cleaner and easier to maintain

### One mistake TypeScript caught today
- Assigning a string to the `age` property
- `age` was defined as a number in the `User` type
- TypeScript showed an error before running the code
