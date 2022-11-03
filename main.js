x = 0;
y = 0;

drawApple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 

    toNumber = Number(content);

    if(Number.isInteger(toNumber)){
      document.getElementById("status").innerHTML = "A maçã começou a ser desenhada";
      drawApple = "set"
    }
    else{
      document.getElementById("status").innerHTML = "O número não foi reconhecido.";
    }
}

function setup() {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;

  canvas = createCanvas(screenWidth-400,screenHeight-200)
  canvas.position(75,100)
}

function draw() {
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";

    for(var i = 1; i <=toNumber; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400 );
      image(apple, x, y, 50, 50)
    }
    document.getElementById("status"). innerHTML = toNumber + " maçã desenhadas"
    speakData = toNumber+"maçãs desenhadas"
    speak()
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}

var screenWidth = 0; 
var screenHeight = 0;

var apple = "";

var speakData = "";

var toNumber = ""

function preload(){
 apple = loadImage('apple.png')  
}

