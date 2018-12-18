function readMessage(input){

  var text = document.getElementById(input).value;

  var msg = new SpeechSynthesisUtterance(text);

  window.speechSynthesis.speak(msg);

}
