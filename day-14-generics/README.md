## Generics in TypeScript

### What generics are
- Generics use `<T>` as a placeholder type
- Type is decided when function or interface is used
- Keeps type information safe

### Why generics are better than any
- `any` removes type checking
- Generics keep input and output types linked
- TypeScript can catch errors early

### One real use case
- API responses with different data types
- Utility functions like identity or array helpers
- Reusable code without losing type safety

### One TypeScript error tested
- Passed wrong type to generic function
- TypeScript blocked the mismatch
- Prevented unsafe data usage
