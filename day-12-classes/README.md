## Important Notes

### What type assertions are
- Tell TypeScript to trust your type
- Use `as` keyword
- Only affects TypeScript, not runtime
- Value stays the same

### Difference between assertion and conversion
- Assertion does NOT change value
- Conversion changes value at runtime
- Assertion is compile-time only

### When assertions are dangerous
- TypeScript stops checking correctness
- Wrong assertion causes runtime errors
- Very risky with `unknown`

### One real use case (DOM)
- `querySelector` may return null
- TypeScript cannot know exact element
- Assertion lets access properties like `value`
