## any, unknown, void, never in TypeScript

### Difference between any and unknown
- any disables type checking
- unknown forces type checking before use
- any can cause runtime crashes
- unknown is safer and recommended

### When to use void
- When a function returns nothing
- Used for logging and side effects
- Common in event handlers

### What never means
- Function never returns a value
- Used for errors or infinite loops
- Represents impossible states

### Why never is useful in switch statements
- Ensures all cases are handled
- Catches missing cases at compile time
- Prevents future bugs when adding new values

### One bug TypeScript prevented today
- Stopped calling methods on unknown
- Caught unhandled switch case
