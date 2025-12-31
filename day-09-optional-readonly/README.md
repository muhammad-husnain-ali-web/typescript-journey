## Day 9 – Optional & Readonly Properties

### What optional properties are
- Marked using `?`
- Property may or may not exist
- Prevents forcing unnecessary values

### What readonly means
- Value cannot be changed after object creation
- Protects important data like IDs
- Prevents accidental mutation

### When to use them in real projects
- Optional for API data and form inputs
- Readonly for IDs, tokens, fixed values
- Common in React props and backend models

### One error TypeScript caught today
- Changing a readonly property caused an error
- Accessing optional property without check warned
- Type mismatch stopped compilation
