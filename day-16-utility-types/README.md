## Utility Types in TypeScript

### What utility types are
- Built-in TypeScript helpers
- Used to create new types from existing types
- Save time and avoid duplicate code

### Partial
- Makes all properties optional
- Used in update forms and PATCH APIs
- Allows sending only changed fields

### Pick
- Selects specific properties from a type
- Used for public data or previews
- Prevents exposing extra fields

### Omit
- Removes selected properties from a type
- Used to hide sensitive data
- Common for API responses

### Readonly
- Makes properties immutable
- Used for config and state safety
- Prevents accidental changes

### One mistake TypeScript prevented today
- Stopped modifying readonly properties
- Prevented missing required fields
- Caught wrong object shapes
