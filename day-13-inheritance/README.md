## Inheritance in TypeScript

### What inheritance is
- Child class uses `extends`
- Child gets properties and methods of parent
- Helps reuse common logic

### Why super() is required
- Calls parent class constructor
- Must be called before using `this`
- Needed to initialize parent properties

### How protected behaves
- Accessible inside class
- Accessible inside child class
- NOT accessible outside the class

### One TypeScript error tested
- Tried to access `protected role` directly
- TypeScript blocked access
- Prevented unsafe property usage
