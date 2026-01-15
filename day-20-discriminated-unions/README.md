## Discriminated Unions in TypeScript

### What a discriminated union is
- Union of multiple object types
- All objects share one common property
- That property has fixed literal values

### Why the status field is important
- Acts as the discriminant key
- Tells TypeScript which object shape is active
- Used to safely access related properties

### How TypeScript narrows automatically
- Checks the value of the discriminant field
- Narrows the type without extra conditions
- Removes the need for manual type guards

### Why this prevents runtime bugs
- Prevents accessing missing properties
- Forces handling of all possible states
- Catches logic errors at compile time

### One real-world example
- API loading, success, and error states
- UI state handling in React or Redux
