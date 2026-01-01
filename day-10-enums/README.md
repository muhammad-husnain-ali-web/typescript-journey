## Day 10 – Enums

### What enums are
- Used to define a fixed set of named values
- Helps avoid hard-coded strings or numbers
- Improves code readability and safety

### Difference between numeric & string enums
- Numeric enums use numbers by default (0, 1, 2…)
- String enums use fixed string values
- String enums are safer and more readable
- String enums are preferred in real projects

### Enum vs union literals
- Union literals are simpler and lightweight
- Enums exist at runtime as an object
- Use enums when values are reused across files
- Use unions for small, local values

### One error TypeScript caught today
- Passing a string not in enum caused an error
- Invalid enum value was blocked at compile time
