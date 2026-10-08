let message = prompt("Enter a message:");

let encrypted = "";

for (let i = 0; i < message.length; i++) {
    let ch = message[i];

    if (ch >= 'A' && ch <= 'Z') {
        encrypted += String.fromCharCode(((ch.charCodeAt(0) - 65 + 3) % 26) + 65);
    } else if (ch >= 'a' && ch <= 'z') {
        encrypted += String.fromCharCode(((ch.charCodeAt(0) - 97 + 3) % 26) + 97);
    } else {
        encrypted += ch;
    }
}

console.log("Encrypted Message:", encrypted);