function copyMessage(output){
  var text = document.getElementById(output);

  text.select();

  document.execCommand('Copy');
}
