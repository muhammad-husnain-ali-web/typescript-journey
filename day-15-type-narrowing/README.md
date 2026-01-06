## Type Narrowing in TypeScript

### What type narrowing is
- Process of reducing a union type to a specific type
- Helps TypeScript understand exact type at runtime
- Makes code safe and predictable

### Why TypeScript needs it
- Union types can have multiple possible shapes
- TypeScript cannot guess automatically
- Developer must clearly check the type

### Difference between typeof, in, instanceof
- typeof → used for primitives like string and number
- in → used to check property existence in objects
- instanceof → used to check class instances

### One real-world use case
- Handling API responses with different shapes
- Working with user roles like admin or user
- React props and event handling
