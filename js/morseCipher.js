function morseCipher(){

  var word = document.getElementById('PlainTextMorse').value;

  var output = '';

  //split each letter and put it in an array
  word = word.toLowerCase().split("");
  console.log(word);

  for (var i = 0; i < word.length; i++) {

    //search for the code in the array
    word[i] = morse[word[i]];
    output += word[i] + '/';

  }

  console.log(output);

  document.getElementById('CipherTextMorse').value = output;

}

var morse = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",

  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",

  " ": "   ", //spaces

  ".": ".-.-.-",
  ",": "--..--",
  ":": "---...",
  "?": "..--..",
  "'": ".----.",
  "-": "-....-",
  "/": "-..-.",
  "(": "-.--.-", //bracket signs are transmitted before and after the text affected
  ")": "-.--.-", //that is why they both have the same code
  "@": ".-.-.",
  "=": "-...-",
  "&": ".-...",
  ";": "-.-.-.",
  "+": ".-.-.",
  "_": "..-.-",
  "$": "...-..-",
  "!": "-.-.-"
};
