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
