const userInput = process.argv;

for (let i = 2; i < userInput.length; i++) {
  let word = userInput[i];
  let newWord = '';
  for (let j = 1; j < word.length; j++) {
    newWord += word[j];
  }
  newWord = newWord + word[0] + 'ay';
  console.log(newWord);
}