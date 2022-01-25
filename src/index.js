const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = [];
// разделяю входную строку на массив по 10 цифр (1 массив = 1 буква) 
  for (let i = 0; i < expr.length; i+=10) {
    let piece = expr.slice(i, i+10);
    arr.push(piece);
  }
console.log(arr);

  let letters = []
  
  // убираю лишние нули с левой части, остаются только 10-ки и 11-ки
for (let item of arr) {
  let oneLetter = item.slice(item.indexOf('1'));
  letters.push(oneLetter);
}

let morseLetters = [];


console.log(letters)

// перевожу массив из букв из 10 и 11 и получаю массив из букв морзе 

for (let letter of letters) {
  let a = '';
  for (let i = 0; i < letter.length; i+=2) {
    if (letter.slice(i, i+2) === '11') {
      a = a + '-'
    } else if (letter.slice(i, i+2) === '10') {
      a = a + '.'
    }  else {
      a = a + ' '
    }
  }
  morseLetters.push(a);
}

console.log(morseLetters);

// сопоставляю с таблицей символов морзе 
let result = []
for (let letter of morseLetters) {
  if (letter === ' ') {
    result.push(' ');
  } else {
    result.push(MORSE_TABLE[letter])
  }
  
}
return result.join('');
}


module.exports = {
    decode
}

