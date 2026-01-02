## Day 11 – Type Assertions

### What type assertions are
- Tell TypeScript to trust your type
- Use `as` keyword to assert a type
- Does not change the actual value
- Only affects the compiler

### Difference between assertion and conversion
- Assertion does not convert the value
- Conversion changes the value at runtime
- TypeScript assertions are compile-time only

### When assertions are dangerous
- TypeScript does not check correctness
- Wrong assertion can cause runtime bugs
- Using assertion on `unknown` is risky

### One real use case (DOM)
- DOM elements can be `null`
- TypeScript cannot know exact element type
- Assertion helps access properties like `value`
- Commonly used with `querySelector`
