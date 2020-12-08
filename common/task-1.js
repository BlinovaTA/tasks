function getVowels(string) {  
  let vowelsString = [];

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      vowelsString.push(string[i]);
    }
  }

  return vowelsString.join('');
}

const string = "Привет! Как дела?";
const vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
console.log(getVowels(string));