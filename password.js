const argv = process.argv;

let userInput = "";
for (let i = 2; i < argv.length; i++) {
  userInput += argv[i];
}

function obfuscate(someString) {

  let password = '';
  
  for (let char of someString) {
    switch (char) {
      case 'a':
        password += 4;
        break;
      case 'e':
        password += 3;
        break;
      case 'o':
        password += 0;
        break;
      case 'l':
        password += 1;
        break;
      default:
        password += char;
    }
  }

  return password;
}
console.log(obfuscate(userInput));
