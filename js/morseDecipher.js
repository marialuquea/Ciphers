function morseDecipher(){

  var text = document.getElementById('CipherTextMorse').value;

  var output = '';

  //words are separated by 5 spaces, so split words
  //to each word apply this function
  text.split("     ").map(function (word) {

    //separate letter in each word where the / is
    //apply function to each letter
    word.split("/").map(function (letter){

        output += alphabet[letter];

    });

    output += " ";

  });

  document.getElementById('PlainTextMorse').value = output;
  console.log(output);

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
