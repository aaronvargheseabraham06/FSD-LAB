let str = prompt("Enter a string:");

let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log("Reversed String:", reversed);