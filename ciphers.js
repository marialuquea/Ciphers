/*
#####################################
#            CAESAR CIPHER          #
#              40280156             #
#         MARIA LUQUE ANGUITA       #
#####################################
*/
function caesarShift(){

  var word = document.getElementById('txtBoxPlainText').value;
  var amount = document.getElementById('amount').value;

  if (amount === ''){

    console.log('enter amount');
    alert('enter amount');

  }
  else{

    amount = parseInt(amount);

    var output = '';

    //Loop through each character
    for (var i = 0; i < word.length; i++){

      var letter = word[i];

      //if it is a letter
      if (letter.match(/^[A-Za-z]+$/)){

        var letter_code = letter.charCodeAt(0);

          //ascii values of uppercase letters
          if ((letter_code >= 65) && (letter_code <= 90)) {
            //add amount without going into other ascii characters
            letter_code = (((letter_code - 65 + amount) % 26) + 65);
          }

          //ascii values of lowercase letters
          if ((letter_code >= 97) && (letter_code <=122)) {
            letter_code = (((letter_code - 97 + amount) % 26) + 97)
          }

        letter = String.fromCharCode(letter_code);
      }
      output += letter;
    }
    console.log(output);
    document.getElementById('txtBoxCipher').innerHTML = output;
  }
}


function caesarDecipher(){

  var word = document.getElementById('txtBoxCipher').value;
  var amount = document.getElementById('amount').value;

  if (amount === ''){

    console.log('enter amount');
    alert('enter amount');

  }
  else{

    amount = parseInt(amount);

    var output = '';

    //Loop through each character
    for (var i = 0; i < word.length; i++){

      var letter = word[i];

      if (letter.match(/^[A-Za-z]+$/)){

        var letter_code = letter.charCodeAt(0);

          //ascii values of uppercase letters
          if ((letter_code >= 65) && (letter_code <= 90)) {
            //add amount without going into other ascii characters
            letter_code = (((letter_code - 90 - amount) % 26) + 90);
          }

          //ascii values of lowercase letters
          if ((letter_code >= 97) && (letter_code <=122)) {
            letter_code = (((letter_code - 122 - amount) % 26) + 122)
          }

        letter = String.fromCharCode(letter_code);

      }

      output += letter;

    }

    console.log(output);

    //WHY DOESN'T THIS WORK?
    document.getElementById('txtBoxPlainText').innerHTML = output;
  }


}



/*
#####################################
#                                   #
#            MORSE CIPHER           #
#                                   #
#####################################
*/

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

function morseCipher(){

  var word = document.getElementById('PlainTextMorse').value;

  var output = '';

  word = word.toLowerCase().split("");

  for (var i = 0; i < word.length; i++) {

    word[i] = morse[word[i]];
    output += word[i] + ' ';

  }

  console.log(output);

  document.getElementById('CipherTextMorse').innerHTML = output;

}

//DOESN'T WORK YET
function morseDecipher(){

  var word = document.getElementById('CipherTextMorse').value;
  console.log('1');

  var output = '';
  console.log('2');

  word = word.split(" ");

  for (var i = 0; i < word.length; i++) {

    word[i] = morse[word[i]];
    output += word[i];

  }

  console.log(output);

  document.getElementById('PlainTextMorse').innerHTML = output;

}
