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
