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
    document.getElementById('txtBoxCipher').value = output;
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
    document.getElementById('txtBoxPlainText').value = output;
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

  document.getElementById('CipherTextMorse').value = output;

}


var alphabet = {
   "-----":"0",
   ".----":"1",
   "..---":"2",
   "...--":"3",
   "....-":"4",
   ".....":"5",
   "-....":"6",
   "--...":"7",
   "---..":"8",
   "----.":"9",

   " ":" ",

   ".-":"a",
   "-...":"b",
   "-.-.":"c",
   "-..":"d",
   ".":"e",
   "..-.":"f",
   "--.":"g",
   "....":"h",
   "..":"i",
   ".---":"j",
   "-.-":"k",
   ".-..":"l",
   "--":"m",
   "-.":"n",
   "---":"o",
   ".--.":"p",
   "--.-":"q",
   ".-.":"r",
   "...":"s",
   "-":"t",
   "..-":"u",
   "...-":"v",
   ".--":"w",
   "-..-":"x",
   "-.--":"y",
   "--..":"z",

   "-.-.-":"!",
   ".-.-.-":".",
   "--..--":",",
   "---...":":",
   "..--..":"?",
   ".----.":"'",
   "-....-":"-",
   "-..-.":"/",
   "-.--.-":"(",
   "-.--.-":")",
   ".-.-.":"@",
   "-...-":"=",
   ".-...":"&",
   "-.-.-.":";",
   ".-.-.":"+",
   "..-.-":"_",
   "...-..-":"$"
};


function morseDecipher(){

  var text = document.getElementById('CipherTextMorse').value;

  var output = '';

  text.split("     ").map(function (word) {

    word.split(" ").map(function (letter){

        output += alphabet[letter];

    });

    output += " ";

  });

  document.getElementById('PlainTextMorse').value = output;
  console.log(output);

}




/*
#####################################
#                                   #
#           BINARY CIPHER           #
#                                   #
#####################################
*/

function binaryCipher() {

  var text = document.getElementById("PlainTextBinary").value;

  var output = '';

  for (i=0; i < text.length; i++) {

    var code = text[i].charCodeAt(0);

    //toString(2) changes it to binary
    code = code.toString(2);

    output += code + " ";

  }
  document.getElementById('CipherTextBinary').value = output;
  console.log(output);
}




function binaryDecipher() {

  var binarytext = document.getElementById('CipherTextBinary').value;

  parseInt(binarytext);

  var output = '';

  binarytext.split(" ").map(function (letter){

    //parses to int from binary
    var letter_code = parseInt(letter, 2);

    output += String.fromCharCode(letter_code);

  });

  console.log(output);
  document.getElementById('PlainTextBinary').value = output;

}
