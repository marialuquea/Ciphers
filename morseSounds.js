var context = null;

function playSound(start, stop){
    osc = context.createOscillator();
    osc.connect(context.destination);
    console.log("starting");
    osc.start(start);
    console.log("stopping");
    osc.stop(stop);
}

function morseSounds(){

  var text = document.getElementById('CipherTextMorse').value;
  var dot = 0.1;
  var dash = 0.3;
  var sep = 0.6;

  var AudioContext = window.AudioContext || window.webkitAudioContext;
  if (context == null){
      context = new AudioContext();
  }
  var osc;

  now = context.currentTime;
  for(var i=0; i<text.length; i++){
      now = now+sep;
      if (text[i] === '-'){

        console.log(text[i]);
        playSound(now, now + dash);
      }
      if (text[i] === '.'){
        console.log(text[i]);
        playSound(now, now + dot);
      }
      else{
        console.log('space');
      }

  }
}
