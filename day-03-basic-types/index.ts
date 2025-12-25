let username: string = "Ali";
let age: number = 22;
let isStudent: boolean = true;

let anything: any = "Test";
anything = 100;

let unknownValue: unknown = "TypeScript";

if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}