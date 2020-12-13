const getVowels = string => {  
  let vowelsString = [];

  for (let i = 0; i < string.length; i++) {
    const currentString = string[i];
    
    if (vowels.includes(currentString.toLowerCase())) {
      vowelsString.push(currentString);
    }
  }

  return vowelsString.join('');
}

const string = "Привет! Как дела? ПРИВЕТ. КАК ДЕЛА?";
const vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
console.log(getVowels(string));