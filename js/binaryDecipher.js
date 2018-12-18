function binaryDecipher() {

  var binarytext = document.getElementById('CipherTextBinary').value;

  parseInt(binarytext);

  var output = '';

  //split text in every space
  //every space is a letter
  //to each letter apply this function
  binarytext.split(" ").map(function (letter){

    //parses to int from binary
    var letter_code = parseInt(letter, 2);

    output += String.fromCharCode(letter_code);

  });

  console.log(output);
  document.getElementById('PlainTextBinary').value = output;

}
