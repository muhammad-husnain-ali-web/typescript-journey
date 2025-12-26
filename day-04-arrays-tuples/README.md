## Day 4 – Arrays & Tuples in TypeScript

### How arrays are typed
In TypeScript, arrays are typed by defining what type of values they can store.
For example, `string[]` allows only strings and `number[]` allows only numbers.
TypeScript prevents adding values of the wrong type to arrays.

### Difference between array and tuple
An array can store multiple values of the same type and its length can change.
A tuple has a fixed length and a fixed order of types.

### One mistake TypeScript prevented today
TypeScript showed an error when I tried to add a string value to a number array or when I changed the order of values in a tuple.
