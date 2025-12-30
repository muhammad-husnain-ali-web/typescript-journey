## Day 8 – Interfaces in TypeScript

### What an interface is
- An interface defines the structure of an object
- It specifies required and optional properties
- Objects must follow the interface shape

### Difference between interface and type
- Interface is mainly used for objects
- Type is commonly used for unions and primitives
- Interfaces can be extended easily

### Why interfaces are useful in teams
- They act as a contract for object structure
- Everyone follows the same data shape
- Reduces bugs in large codebases

### One error TypeScript caught today
- Changing a readonly property caused an error
- Missing or wrong property types showed errors
- TypeScript stopped invalid object usage
