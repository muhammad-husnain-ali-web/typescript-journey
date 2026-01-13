## keyof, Indexed Access & Mapped Types

### What keyof does
- Converts object keys into a union type
- Helps restrict values to valid property names
- Prevents accessing non-existing keys

### Why T[K] is powerful
- Allows accessing a property type dynamically
- Keeps return type linked to key
- Used in generic helper functions

### What mapped types are
- Used to loop over keys of a type
- Create new types from existing ones
- Apply changes like readonly or optional

### How utility types are built
- Readonly uses mapped types + readonly
- Partial uses mapped types + optional
- Pick and Omit use keyof internally

### One thing that confused me at first
- Understanding K in keyof T
- How types can be generated from other types
