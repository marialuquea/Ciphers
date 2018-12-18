function atbashCipher() {

  var text = document.getElementById('PlainTextAtbash').value;

  var output = '';

      for (var i = 0; i < text.length; i++) {

        var letter = text[i];
        var diff; //difference in letter codes
        var new_letter; //code of new letter

        if (letter.match(/^[A-Za-z]+$/)) { //if it is a letter

          var letter_code = letter.charCodeAt(0); //get letter ASCII code

          //lowercase letter
          if ((letter_code >= 97) && (letter_code <=122)) {
              diff = letter_code - 97;
              new_letter = 122 - diff;
          }
          //uppercase letters
          if ((letter_code >= 65) && (letter_code <= 90)){
            diff = letter_code - 65;
            new_letter = 90 - diff;
          }

          letter = String.fromCharCode(new_letter); //get letter from code
        }
        output += letter; //add letter to output
      }
      console.log(output);
      document.getElementById('CipherTextAtbash').value = output;
    
}
