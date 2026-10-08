let num = parseInt(prompt("Enter a number:"));

num = Math.abs(num);

let count = 0;

if (num === 0) {
    count = 1;
} else {
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
}

console.log("Number of digits =", count);