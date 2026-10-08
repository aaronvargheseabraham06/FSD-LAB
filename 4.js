let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));
let c = parseInt(prompt("Enter third number:"));

let largest = a;

if (b > largest) {
    largest = b;
}

if (c > largest) {
    largest = c;
}

console.log("Largest number =", largest);