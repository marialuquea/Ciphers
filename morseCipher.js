function morseCipher(){

  var word = document.getElementById('PlainTextMorse').value;

  var output = '';

  word = word.toLowerCase().split("");

  for (var i = 0; i < word.length; i++) {

    word[i] = morse[word[i]];
    output += word[i] + ' ';

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
