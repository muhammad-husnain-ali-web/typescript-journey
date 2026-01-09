## Interface vs Type in TypeScript

### Difference between interface and type
- interface is mainly for object shapes
- type can define objects, unions, primitives, and functions
- interface supports extension and merging
- type is more flexible but not mergeable

### Real-world example of interface
- Used for API response objects
- Used for React props
- Used for class models

### Real-world example of type
- Used for union states like loading | success | error
- Used for IDs like number | string
- Used for function types

### Why interface merging is useful
- Allows extending types across files
- Helps large teams add fields safely
- Useful for library and framework design

### One interview mistake avoided
- Did not say interface and type are the same
- Did not use type for everything
- Correctly explained interface merging
