let x: [string, number];
x = ["typescript", 2]; // OK
x = [2, "typescript"]; // Error

console.log(typeof x[0]) //String
console.log(typeof x[1]) //Number

x[2]= "Welcome";//Ok
x[3] = true// Error


